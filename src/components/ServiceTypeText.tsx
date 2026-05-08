import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const SERVICES = ["B2B service", "telco service", "SaaS service", "edutech service"];

export function ServiceTypeText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SERVICES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="relative inline-flex align-baseline overflow-hidden text-site-primary"
      style={{ minWidth: "11ch", height: "1.2em" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={SERVICES[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 whitespace-nowrap"
        >
          {SERVICES[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible whitespace-nowrap">{SERVICES[index]}</span>
    </span>
  );
}
