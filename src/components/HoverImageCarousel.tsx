import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function HoverImageCarousel({
  images,
  hovered,
  intervalMs = 2500,
}: {
  images: string[];
  hovered: boolean;
  intervalMs?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!hovered || images.length < 2) {
      setI(0);
      return;
    }
    const id = setInterval(() => {
      setI((v) => (v + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [hovered, images.length, intervalMs]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#09090b]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={i}
          src={images[i]}
          alt=""
          initial={{ x: "100%", opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: hovered ? 1.04 : 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}
