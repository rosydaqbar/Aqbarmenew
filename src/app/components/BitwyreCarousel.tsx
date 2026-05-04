import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import imgBitwyre1 from "../../imports/Aqbar/ddfcb7e94b53ba06761be323aff6d443daa4eb64.png";
import imgBitwyre2 from "../../imports/image.png";
import imgBitwyre3 from "../../imports/image-1.png";

const images = [imgBitwyre1, imgBitwyre2, imgBitwyre3];

export function BitwyreCarousel({ hovered }: { hovered: boolean }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!hovered) {
      setI(0);
      return;
    }
    const id = setInterval(() => {
      setI((v) => (v + 1) % images.length);
    }, 2500);
    return () => clearInterval(id);
  }, [hovered]);

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
