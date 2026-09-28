"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SHOES = [
  { src: "/popouts/sneaker-1.png", alt: "Tan and navy bandana-pattern dunk-style sneaker", tilt: "-rotate-6", pos: "left-[4%] top-10 w-[30%]" },
  { src: "/popouts/sneaker-2.png", alt: "Olive white and black high-top sneaker", tilt: "rotate-2", pos: "left-[35%] top-0 w-[32%]" },
  { src: "/popouts/sneaker-3.png", alt: "Green cream and red star graphic sneaker", tilt: "rotate-[9deg]", pos: "left-[64%] top-8 w-[30%]" },
];

function Shoe({
  src,
  alt,
  tilt,
  pos,
  hideOnMobile,
}: {
  src: string;
  alt: string;
  tilt: string;
  pos: string;
  hideOnMobile?: boolean;
}) {
  return (
    <div className={`absolute ${pos} ${tilt} ${hideOnMobile ? "hidden sm:block" : ""}`}>
      <Image
        src={src}
        alt={alt}
        width={750}
        height={750}
        className="h-auto w-full object-contain drop-shadow-[0_24px_24px_rgba(26,26,26,0.25)]"
        priority={false}
      />
      {/* Soft ground shadow */}
      <div className="mx-auto h-6 w-3/4 rounded-full bg-black/20 blur-xl" />
    </div>
  );
}

// One state machine drives word + asset from the same callback — no dual
// clocks. Assets sit centered behind the word at 60% with a soft mask;
// the word stays full strength on top.
const EASE = [0.16, 1, 0.3, 1] as const;

function FitCard() {
  return (
    <div className="rotate-2 rounded-2xl border border-black/10 bg-bg-primary p-2 shadow-beautiful-sm">
      <Image
        src="/popouts/fit-hoodie.png"
        alt="Forest Circuits&Soles hoodie with grey sweatpants"
        width={600}
        height={900}
        className="h-[44svh] min-h-[300px] w-auto rounded-xl object-cover"
        priority={false}
      />
    </div>
  );
}

export function HeroCutout({ active }: { active: number }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    if (active === 1) {
      return (
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-60">
          <FitCard />
        </div>
      );
    }
    return active === 0 ? (
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[70vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-60">
        <div className="relative h-[300px]">
          <Shoe {...SHOES[0]} />
        </div>
      </div>
    ) : null;
  }

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[70vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-60 [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,black_55%,transparent_100%)]">
      <AnimatePresence mode="popLayout">
        {active === 0 && (
          <motion.div
            key="sneaker-cluster"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
              exit: { opacity: 0, scale: 0.98, filter: "blur(2px)", transition: { duration: 0.35 } },
            }}
            className="relative h-[clamp(300px,44svh,480px)]"
          >
            {SHOES.map((s, i) => (
              <motion.div
                key={s.src}
                variants={{
                  hidden: { opacity: 0, scale: 0.96, filter: "blur(2px)" },
                  show: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.5, ease: EASE },
                  },
                }}
                className="absolute inset-0"
              >
                <Shoe {...s} hideOnMobile={i > 0} />
              </motion.div>
            ))}
          </motion.div>
        )}
        {active === 1 && (
          <motion.div
            key="fit-card"
            initial={{ opacity: 0, scale: 0.96, filter: "blur(2px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(2px)", transition: { duration: 0.35 } }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative flex justify-center"
          >
            <FitCard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
