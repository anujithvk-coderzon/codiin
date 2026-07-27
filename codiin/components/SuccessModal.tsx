"use client";

import { useEffect, useRef } from "react";
import { CareerIcon } from "./Icons";

export default function SuccessModal({
  open,
  message,
  onClose,
}: {
  open: boolean;
  message: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`modal${open ? " active" : ""}`}
      id="successModal"
      role="dialog"
      aria-modal={open}
      aria-labelledby="modalTitle"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <div className="modal-icon">
          <CareerIcon />
        </div>
        <h3 id="modalTitle">Thank You!</h3>
        <p id="modalMessage">{message}</p>
        <button
          ref={closeRef}
          type="button"
          className="btn btn-primary"
          id="closeModalBtn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
