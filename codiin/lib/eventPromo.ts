"use client";

import { useSyncExternalStore } from "react";

/**
 * Whether the visitor has closed the event promo.
 *
 * sessionStorage, not localStorage: dismissing it should last the browsing
 * session, not for ever. Someone who comes back tomorrow is worth telling
 * about the event again.
 */
const KEY = "codiin:event-promo-dismissed";

const listeners = new Set<() => void>();

const subscribe = (callback: () => void) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

const read = () => {
  try {
    return sessionStorage.getItem(KEY) !== null;
  } catch {
    // Storage disabled — show it rather than hiding it for ever.
    return false;
  }
};

export const dismissPromo = () => {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    // As above. The component's own state still hides it for this page.
  }
  listeners.forEach((notify) => notify());
};

/**
 * Read through useSyncExternalStore rather than an effect: sessionStorage does
 * not exist during the server render, and the server snapshot is what lets
 * React render "dismissed" first and correct itself after hydration without a
 * mismatch warning.
 */
export const usePromoDismissed = () =>
  useSyncExternalStore(
    subscribe,
    read,
    // Treated as dismissed on the server, so nothing flashes into view in the
    // cached HTML before the browser has had a chance to say otherwise.
    () => true,
  );
