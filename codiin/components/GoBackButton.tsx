"use client";

/**
 * Replaces the original `href="javascript:history.back()"` link, which
 * modern browsers and CSP policies block.
 */
export default function GoBackButton() {
  return (
    <button
      type="button"
      className="btn-secondary"
      onClick={() => {
        if (window.history.length > 1) window.history.back();
        else window.location.assign("/");
      }}
    >
      Go Back
    </button>
  );
}
