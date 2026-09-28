"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type CutoutKind = "sneakers" | "streetwear" | "none";

// Placeholder stand-ins with the real geometry: angled panel + soft
// ground shadow. Swap for transparent PNGs at
// public/popouts/sneakers.png / streetwear.png when assets land.
function Placeholder({
  label,
  sub,
  tone,
  tilt,
}: {
  label: string;
  sub: string;
  tone: string;
  tilt: string;
}) {
  return (
    <div className="relative">
      <div
        className={`flex h-[38svh] w-[26svw] min-h-[280px] min-w-[220px] max-w-[360px] flex-col items-center justify-center gap-2 rounded-2xl border border-black/10 ${tone} ${tilt} shadow-beautiful-sm`}
      >
        <span className="font-heading text-sm tracking-[0.2em]">{label}</span>
        <span className="text-xs text-text-muted">{sub}</span>
      </div>
      {/* Soft ground shadow */}
      <div className="absolute -bottom-6 left-1/2 h-8 w-4/5 -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
    </div>
  );
}

export function HeroCutout({ active }: { active: number }) {
  const reduceMotion = useReducedMotion();
  const kind: CutoutKind =
    active === 0 ? "sneakers" : active === 1 ? "streetwear" : "none";

  if (reduceMotion) {
    return (
      <div className="absolute right-[4vw] top-1/2 z-0 -translate-y-[30%]">
        <Placeholder
          label="SNEAKER"
          sub="angled placeholder"
          tone="bg-sage/25"
          tilt="-rotate-6"
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute right-[4vw] top-1/2 z-0 -translate-y-[30%]">
      <AnimatePresence mode="popLayout">
        {kind !== "none" && (
          <motion.div
            key={kind}
            initial={{ opacity: 0, y: 24, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(2px)" }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            {kind === "sneakers" ? (
              <Placeholder
                label="SNEAKER"
                sub="angled placeholder"
                tone="bg-sage/25"
                tilt="-rotate-6"
              />
            ) : (
              <Placeholder
                label="HOODIE"
                sub="placeholder"
                tone="bg-clay/25"
                tilt="rotate-3"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
