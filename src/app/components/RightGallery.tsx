import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import imgImage31 from "../../imports/Aqbar/ddfcb7e94b53ba06761be323aff6d443daa4eb64.png";
import imgImage32 from "../../imports/Aqbar/f94e06675dddc9e0c1cd2bb644337d4a792cf1e5.png";
import imgImage33 from "../../imports/Aqbar/2ab685e5f53589b0a6667f46241826ccbc444144.png";
import imgImage34 from "../../imports/Aqbar/1bbfcad798590660313cb8799f7918ba33f919b6.png";
import imgBitwyre2 from "../../imports/image.png";
import imgBitwyre3 from "../../imports/image-1.png";
import imgDominus2 from "../../imports/image-2.png";
import imgAxis2 from "../../imports/image-3.png";
import imgInnovate2 from "../../imports/image-4.png";
import imgInnovate3 from "../../imports/image-5.png";

const items: {
  title: string;
  description: string;
  images: string[];
  link?: string;
}[] = [
  {
    title: "Bitwyre",
    description: "Landing Page, Market Monitor, and Leaderboard.",
    images: [imgImage31, imgBitwyre2, imgBitwyre3],
    link: "http://bit.ly/4tyxpmp",
  },
  {
    title: "Dominus",
    description: "High conversion and interactive landing page",
    images: [imgImage32, imgDominus2],
    link: "https://bit.ly/dominuslanding",
  },
  {
    title: "InnovateTech",
    description: "Pitch landing page design for an all-in-one task management SaaS concept.",
    images: [imgImage33, imgInnovate2, imgInnovate3],
    link: "https://bit.ly/4do0hsr",
  },
  {
    title: "Axis NET",
    description: "Build your own package feature",
    images: [imgImage34, imgAxis2],
    link: "https://bit.ly/3RkeQod",
  },
];

const rotations = [-4, 3, -2, 2];

function GalleryCard({
  item,
  index,
  hiding,
}: {
  item: (typeof items)[number];
  index: number;
  hiding: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
      animate={
        hiding
          ? {
              opacity: 1,
              y: -index * 360,
              scale: 0.88,
              rotate: rotations[index % rotations.length],
              filter: "blur(0px)",
            }
          : { opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }
      }
      transition={{
        duration: hiding ? 0.45 : 0.65,
        delay: hiding ? index * 0.05 : index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => {
        if (item.link) window.open(item.link, "_blank", "noopener,noreferrer");
      }}
      style={{ zIndex: items.length - index, cursor: item.link ? "pointer" : "default" }}
      className="group relative flex w-full flex-col overflow-hidden rounded-[4px] bg-[#181818]"
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "722 / 368.5" }}>
        <ImageCarousel images={item.images} hovered={hovered} />
      </div>
      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between gap-3">
          <p
            className="text-[#e2e2e2]"
            style={{ fontSize: "16px", lineHeight: 1.618, fontWeight: 700 }}
          >
            {item.title}
          </p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9c9c9c] transition hover:text-white"
              aria-label={`Open ${item.title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <p
          className="text-[#9c9c9c]"
          style={{ fontSize: "12px", lineHeight: 1.618 }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function RightGallery({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative flex min-h-[400px] w-full flex-col gap-4 bg-[#1b1b1b] py-4 lg:h-full lg:pl-6">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="gallery"
            className="flex flex-col gap-4"
            exit={{ opacity: 0, scale: 0.82, filter: "blur(8px)" }}
            transition={{ duration: 0.28 }}
          >
            <div className="sticky top-0 z-20 flex h-[51px] w-full items-center justify-between bg-[#1b1b1b] py-2">
              <div className="flex items-center gap-4">
                <p className="text-[#e2e2e2]" style={{ fontSize: "18px", lineHeight: 1.618, fontWeight: 700 }}>
                  Gallery
                </p>
                <button
                  onClick={onToggle}
                  aria-expanded={open}
                  className="rounded-lg bg-gradient-to-b from-[rgba(36,36,36,0.5)] to-[rgba(28,22,22,0.25)] px-3 py-1 text-white shadow-[0px_1px_0px_rgba(0,0,0,0.05),0px_4px_2px_rgba(0,0,0,0.05),0px_10px_5px_rgba(0,0,0,0.1)] backdrop-blur transition hover:brightness-125"
                  style={{ fontSize: "14px", lineHeight: "20px" }}
                >
                  Hide
                </button>
              </div>
            </div>
            {items.map((it, i) => (
              <GalleryCard key={it.title} item={it} index={i} hiding={false} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="flex flex-1 flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center gap-4">
              <p className="text-[#e2e2e2]" style={{ fontSize: "18px", lineHeight: 1.618, fontWeight: 700 }}>
                Gallery
              </p>
              <button
                onClick={onToggle}
                aria-expanded={open}
                className="rounded-lg bg-gradient-to-b from-[rgba(36,36,36,0.5)] to-[rgba(28,22,22,0.25)] px-3 py-1 text-white shadow-[0px_1px_0px_rgba(0,0,0,0.05),0px_4px_2px_rgba(0,0,0,0.05),0px_10px_5px_rgba(0,0,0,0.1)] backdrop-blur transition hover:brightness-125"
                style={{ fontSize: "14px", lineHeight: "20px" }}
              >
                Open
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
