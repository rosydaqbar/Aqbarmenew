import { motion } from "motion/react";

export function AvailabilityPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
      <span className="relative inline-flex h-2 w-2">
        <motion.span
          className="absolute inset-0 rounded-full bg-emerald-400"
          animate={{ scale: [1, 1.8], opacity: [0.45, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative inline-block h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      Available for new opportunities
    </div>
  );
}
