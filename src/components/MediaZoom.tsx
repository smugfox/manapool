"use client";

import { useRef } from "react";

/** A looping video that opens full-size in a lightbox when clicked. */
export default function MediaZoom({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        className="zoom"
        onClick={() => ref.current?.showModal()}
        aria-label={`Enlarge: ${label}`}
      >
        <video autoPlay loop muted playsInline preload="metadata" aria-label={label}>
          <source src={src} type="video/mp4" />
        </video>
        <span className="hint">Click to enlarge</span>
      </button>
      <dialog
        ref={ref}
        className="lightbox"
        onClick={() => ref.current?.close()}
        aria-label={label}
      >
        <video autoPlay loop muted playsInline>
          <source src={src} type="video/mp4" />
        </video>
      </dialog>
    </>
  );
}
