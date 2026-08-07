"use client";

import { useSyncExternalStore } from "react";

/**
 * Which events this browser has registered for. Shared by the registration
 * dialog, which writes it, and the listing and detail pages, which read it.
 *
 * A convenience only — cleared storage, another browser or incognito all
 * forget it. The API's duplicate check is what actually holds; this exists so
 * someone does not have to fill a form in again to be told they already did.
 *
 * What is stored is the date the entry stops being useful — the end of the
 * event — under the event's slug. No name, email or anything else
 * identifying, and it is never sent anywhere.
 */
const PREFIX = "codiin:event-registered:";

const storageKey = (slug: string) => `${PREFIX}${slug}`;

const listeners = new Set<() => void>();

/* An entry is worth keeping until the event it refers to has finished. Without
   this every registration a visitor ever made stayed in their browser for
   good, one key per event, with nothing that would ever remove them. */
const isExpired = (value: string) => {
  const until = Date.parse(value);
  // An unparseable value is from a version that stored something else. Treat
  // it as spent rather than keeping it forever.
  return Number.isNaN(until) || until < Date.now();
};

/**
 * Drops every entry whose event has finished. Run once when the first
 * component subscribes, so entries for events the visitor never opens again
 * are still cleared rather than waiting to be read.
 */
let pruned = false;

const pruneExpired = () => {
  if (pruned) return;
  pruned = true;
  try {
    const stale: string[] = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (!key?.startsWith(PREFIX)) continue;
      const value = window.localStorage.getItem(key);
      if (value === null || isExpired(value)) stale.push(key);
    }
    // Collected first, then removed: removing during the loop reindexes the
    // keys underneath it and skips entries.
    stale.forEach((key) => window.localStorage.removeItem(key));
  } catch {
    // Storage can be disabled outright. Nothing here is load-bearing.
  }
};

const subscribe = (callback: () => void) => {
  pruneExpired();
  listeners.add(callback);
  // Fires only for writes from *other* tabs, so markRegistered notifies this
  // one by hand.
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
};

const readRegistered = (slug: string) => {
  try {
    const value = window.localStorage.getItem(storageKey(slug));
    if (value === null) return false;
    if (isExpired(value)) {
      window.localStorage.removeItem(storageKey(slug));
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

/**
 * @param until ISO date the entry stops mattering — the event's end. After it
 *   passes the entry is dropped, so the button offers registration again for
 *   whatever the event becomes next.
 */
export const markRegistered = (slug: string, until: string) => {
  try {
    window.localStorage.setItem(storageKey(slug), until);
  } catch {
    // As above.
  }
  listeners.forEach((notify) => notify());
};

/**
 * Read through useSyncExternalStore rather than an effect: localStorage does
 * not exist during the server render, and the server snapshot is what lets
 * React render the unregistered state first and correct itself after
 * hydration without a mismatch warning.
 */
export const useRegistered = (slug: string) =>
  useSyncExternalStore(
    subscribe,
    () => readRegistered(slug),
    // The server has no idea who is asking — these pages are cached and
    // shared by every visitor.
    () => false,
  );
