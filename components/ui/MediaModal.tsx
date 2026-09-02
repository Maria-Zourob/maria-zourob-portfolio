"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaModal } from "@/lib/MediaModalContext";

declare global {
  interface Window {
    bootstrap: any;
  }
}

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

export default function MediaModal() {
  const { isOpen, items, index, groupTitle, close, next, prev } = useMediaModal();
  const modalElRef = useRef<HTMLDivElement>(null);
  const bsInstanceRef = useRef<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [speed, setSpeed] = useState(1);

  // Create (or lazily re-create) the Bootstrap Modal instance whenever we
  // need it. We don't rely solely on a mount-time effect because the
  // Bootstrap script (loaded via next/script strategy="afterInteractive")
  // can finish loading slightly after this component mounts — checking only
  // once on mount risks finding window.bootstrap still undefined and never
  // trying again, which silently breaks every "Watch Demo" click.
  function getModalInstance() {
    if (bsInstanceRef.current) return bsInstanceRef.current;
    if (!modalElRef.current || typeof window === "undefined" || !window.bootstrap) return null;
    const instance = window.bootstrap.Modal.getOrCreateInstance(modalElRef.current, {
      backdrop: true,
      keyboard: true,
    });
    bsInstanceRef.current = instance;
    modalElRef.current.addEventListener("hidden.bs.modal", () => close());
    return instance;
  }

  useEffect(() => {
    if (isOpen) {
      // Poll briefly in case the Bootstrap script is still finishing its load.
      let attempts = 0;
      const tryShow = () => {
        const instance = getModalInstance();
        if (instance) {
          instance.show();
        } else if (attempts < 20) {
          attempts += 1;
          setTimeout(tryShow, 100);
        }
      };
      tryShow();
    } else {
      bsInstanceRef.current?.hide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Reset to normal speed each time the modal is freshly opened.
  useEffect(() => {
    if (isOpen) setSpeed(1);
  }, [isOpen]);

  // Keep the <video> element's actual playback rate in sync with the chosen
  // speed — needs re-applying whenever the video source changes too, since
  // swapping `src` resets playbackRate back to 1 in the browser.
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = speed;
  }, [speed, index]);

  // Left / Right arrow navigation while the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, next, prev]);

  const current = items[index];
  const hasMultiple = items.length > 1;

  return (
    <div
      className="modal fade media-modal"
      tabIndex={-1}
      ref={modalElRef}
      aria-hidden={!isOpen}
      aria-labelledby="mediaModalTitle"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <p className="mono text-[11px] uppercase tracking-wider text-pine-300 mb-1">
                {groupTitle}
              </p>
              <h3 id="mediaModalTitle" className="font-display text-base md:text-lg font-semibold text-paper m-0">
                {current?.title}
              </h3>
            </div>
            <button
              type="button"
              className="h-9 w-9 shrink-0 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-paper"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="modal-body relative">
            {/* Only mounted while open, so nothing preloads or keeps playing in the background. */}
            {isOpen &&
              current &&
              (current.type === "video" ? (
                <video
                  key={current.src}
                  ref={videoRef}
                  src={current.src}
                  controls
                  autoPlay
                  playsInline
                  poster={current.poster}
                  onLoadedMetadata={() => {
                    if (videoRef.current) videoRef.current.playbackRate = speed;
                  }}
                  className="w-full"
                >
                  Your browser does not support embedded video.
                </video>
              ) : (
                <img key={current.src} src={current.src} alt={current.title} />
              ))}

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  disabled={index === 0}
                  aria-label="Previous"
                  className="media-nav-btn absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 text-paper flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={index === items.length - 1}
                  aria-label="Next"
                  className="media-nav-btn absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 text-paper flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {current?.type === "video" && (
            <div className="modal-speed-row flex items-center justify-center flex-wrap gap-1.5 px-4 pt-3 pb-1 border-t border-white/10">
              <span className="mono text-[10px] uppercase tracking-wider text-pine-300 me-1.5">
                Speed
              </span>
              {SPEEDS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSpeed(s)}
                  aria-pressed={speed === s}
                  className={`mono text-xs px-2.5 py-1 rounded-full transition-colors ${
                    speed === s
                      ? "bg-paper text-ink"
                      : "bg-white/10 text-paper/75 hover:bg-white/20"
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          )}

          {hasMultiple && (
            <div className="modal-counter-row flex items-center justify-center gap-3 py-3 mono text-xs text-pine-200 tracking-wide">
              {index + 1} / {items.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
