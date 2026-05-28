import { useEffect, useRef, useState } from "react";
import {
  PortfolioBioPanel,
  PortfolioPrimaryContent,
  PortfolioSecondaryContent,
} from "../components/PortfolioBioPanel";
import { ProjectGallery } from "../components/ProjectGallery";

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : true
  );
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isDesktop;
}

export default function Home() {
  const isDesktop = useIsDesktop();
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const virtualRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(true);

  useEffect(() => {
    if (!isDesktop) return;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    const getMax = () => {
      const vh = window.innerHeight;
      const maxLeft = Math.max(0, left.scrollHeight - vh);
      const maxRight = Math.max(0, right.scrollHeight - vh);
      return { maxLeft, maxRight, maxScroll: Math.max(maxLeft, maxRight) };
    };

    const writeScroll = () => {
      const { maxLeft, maxRight } = getMax();
      left.scrollTop = Math.min(virtualRef.current, maxLeft);
      right.scrollTop = Math.min(virtualRef.current, maxRight);
    };

    const tick = () => {
      const diff = targetRef.current - virtualRef.current;
      if (Math.abs(diff) < 0.5) {
        virtualRef.current = targetRef.current;
        writeScroll();
        rafRef.current = null;
        return;
      }
      virtualRef.current += diff * 0.12;
      writeScroll();
      rafRef.current = requestAnimationFrame(tick);
    };

    const ensureTick = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };

    const apply = () => {
      const { maxScroll } = getMax();
      targetRef.current = Math.min(targetRef.current, maxScroll);
      virtualRef.current = Math.min(virtualRef.current, maxScroll);
      writeScroll();
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const { maxScroll } = getMax();
      targetRef.current = Math.max(0, Math.min(maxScroll, targetRef.current + e.deltaY));
      ensureTick();
    };

    const onKey = (e: KeyboardEvent) => {
      const vh = window.innerHeight;
      const { maxScroll } = getMax();
      let delta = 0;
      if (e.key === "ArrowDown") delta = 60;
      else if (e.key === "ArrowUp") delta = -60;
      else if (e.key === "PageDown") delta = vh * 0.9;
      else if (e.key === "PageUp") delta = -vh * 0.9;
      else if (e.key === "Home") {
        targetRef.current = 0;
        ensureTick();
        e.preventDefault();
        return;
      } else if (e.key === "End") {
        targetRef.current = maxScroll;
        ensureTick();
        e.preventDefault();
        return;
      } else return;
      e.preventDefault();
      targetRef.current = Math.max(0, Math.min(maxScroll, targetRef.current + delta));
      ensureTick();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", apply);
    const tm = setTimeout(apply, 50);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", apply);
      clearTimeout(tm);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [galleryOpen, isDesktop]);

  if (!isDesktop) {
    return (
      <div
        className="min-h-[100dvh] w-full bg-site-bg px-4"
        style={{ fontFamily: "var(--site-font-family)" }}
      >
        <div className="mx-auto flex max-w-[620px] flex-col">
          <PortfolioPrimaryContent />
          <ProjectGallery open={galleryOpen} onToggle={() => setGalleryOpen((v) => !v)} />
          <PortfolioSecondaryContent />
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-[100dvh] w-full overflow-hidden bg-site-bg px-4"
      style={{ fontFamily: "var(--site-font-family)" }}
    >
      <div className="flex h-full items-start gap-[10px]">
        <div ref={leftRef} className="h-full overflow-hidden">
          <PortfolioBioPanel />
        </div>
        <div ref={rightRef} className="h-full flex-1 overflow-hidden">
          <ProjectGallery open={galleryOpen} onToggle={() => setGalleryOpen((v) => !v)} />
        </div>
      </div>
    </div>
  );
}
