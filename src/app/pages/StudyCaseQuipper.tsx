import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import AqbarGalleryHidden from "../../imports/AqbarGalleryHidden-1/AqbarGalleryHidden-33-682";

export default function StudyCaseQuipper() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useLayoutEffect(() => {
    const root = wrapRef.current?.querySelector<HTMLElement>(":scope > div");
    const header = root?.firstElementChild as HTMLElement | null;
    if (header) {
      header.style.position = "sticky";
      header.style.top = "0";
      header.style.zIndex = "30";
    }

    wrapRef.current?.querySelectorAll<HTMLElement>("p").forEach((p) => {
      if (p.textContent?.trim() === "The Flow") {
        const card = p.parentElement as HTMLElement | null;
        if (card) {
          card.style.width = "100%";
          card.style.maxWidth = "458px";
          card.style.boxSizing = "border-box";
          card.querySelectorAll<HTMLElement>("*").forEach((d) => {
            d.style.maxWidth = "100%";
            d.style.minWidth = "0";
            d.style.boxSizing = "border-box";
            if (d.tagName === "P") {
              d.style.whiteSpace = "normal";
              (d.style as CSSStyleDeclaration & { overflowWrap: string }).overflowWrap =
                "anywhere";
              d.style.wordBreak = "break-word";
            }
          });
        }
      }
    });

    const sections = wrapRef.current?.querySelectorAll<HTMLElement>(
      '[data-name="Left"] > *'
    );
    sections?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.filter = "blur(8px)";
      el.style.transition =
        "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1), filter 0.65s cubic-bezier(0.22,1,0.36,1)";
      el.style.transitionDelay = `${i * 0.08}s`;
    });
    requestAnimationFrame(() => {
      sections?.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.filter = "blur(0px)";
      });
    });
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const img = target.closest("img") as HTMLImageElement | null;
      if (img && el.contains(img)) {
        e.preventDefault();
        e.stopPropagation();
        setLightbox(img.src);
      }
    };
    el.addEventListener("click", onClick, true);
    return () => el.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div
      className="min-h-[100dvh] w-full bg-[#1b1b1b]"
      style={{ fontFamily: "'Space Mono', ui-monospace, monospace" }}
    >
      <Link
        to="/"
        aria-label="Back to portfolio"
        className="fixed left-[34px] top-[24px] z-50 h-[36px] w-[88px] rounded-lg"
      />
      <style>{`
        .study-page [class*="Space_Mono"] { font-family: 'Space Mono', ui-monospace, monospace !important; }
        .study-page [class*="Space_Mono:Bold"] { font-weight: 700 !important; }
        .study-page [class*="Space_Mono:Regular"] { font-weight: 400 !important; }
        .study-page [class*="w-[780px]"] { width: 100% !important; max-width: 780px; }
        .study-page [class*="w-[666px]"] { width: 100% !important; max-width: 666px; }
        .study-page [class*="w-[562px]"] { width: 100% !important; max-width: 562px; }
        .study-page [class*="w-[360px]"] { width: 100% !important; max-width: 360px; }
        .study-page [class*="px-[234px]"] { padding-left: clamp(16px, 6vw, 234px) !important; padding-right: clamp(16px, 6vw, 234px) !important; }
        .study-page [class*="px-[34px]"] { padding-left: clamp(16px, 4vw, 34px) !important; padding-right: clamp(16px, 4vw, 34px) !important; }
        .study-page [data-name^="image"],
        .study-page [data-name^="1404"] {
          width: 100% !important;
          max-width: 562px !important;
          height: auto !important;
          aspect-ratio: auto !important;
          position: relative !important;
          display: block !important;
        }
        .study-page [data-name^="image"] > div,
        .study-page [data-name^="1404"] > div {
          position: static !important;
          inset: auto !important;
          width: 100% !important;
          height: auto !important;
        }
        .study-page [data-name^="image"] img,
        .study-page [data-name^="1404"] img {
          position: static !important;
          inset: auto !important;
          width: 100% !important;
          height: auto !important;
          max-width: 100% !important;
          object-fit: initial !important;
          pointer-events: auto !important;
          cursor: zoom-in !important;
          display: block !important;
        }
        .study-page [class*="whitespace-nowrap"] { white-space: normal !important; }
        @media (max-width: 640px) {
          .study-page [class*="text-[24px]"] { font-size: 20px !important; }
          .study-page [class*="text-[20px]"] { font-size: 18px !important; }
        }
      `}</style>
      <div ref={wrapRef} className="study-page relative">
        <AqbarGalleryHidden />
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={18} />
            </button>
            <motion.img
              src={lightbox}
              alt=""
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[92vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
