"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SHOES = [
  { src: "/popouts/sneaker-1.png", alt: "Tan and navy bandana-pattern dunk-style sneaker", tilt: "-rotate-6", pos: "left-0 top-6 w-[clamp(200px,24vw,340px)]" },
  { src: "/popouts/sneaker-2.png", alt: "Olive white and black high-top sneaker", tilt: "rotate-3", pos: "left-[24%] top-0 w-[clamp(220px,26vw,370px)]" },
  { src: "/popouts/sneaker-3.png", alt: "Green cream and red star graphic sneaker", tilt: "rotate-[10deg]", pos: "left-[48%] top-10 w-[clamp(200px,24vw,340px)]" },
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

// Sneaker cluster on the Sneakers beat, framed fit card on the
// Streetwear beat, type-only on Community.
const beatTransition = (delay = 0) => ({
  duration: 0.5,
  delay,
  ease: [0.23, 1, 0.32, 1] as const,
});

function FitCard() {
  return (
    <div className="rotate-2 rounded-2xl border border-black/10 bg-bg-primary p-2 shadow-beautiful-sm">
      <Image
        src="/popouts/fit-hoodie.png"
        alt="Forest Circuits&Soles hoodie with grey sweatpants"
        width={600}
        height={900}
        className="h-[34svh] min-h-[260px] w-auto rounded-xl object-cover"
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
        <div className="pointer-events-none absolute right-[2vw] top-1/2 z-0 -translate-y-[30%]">
          <FitCard />
        </div>
      );
    }
    return active === 0 ? (
      <div className="pointer-events-none absolute right-[2vw] top-1/2 z-0 w-[46vw] max-w-[560px] -translate-y-[30%]">
        <div className="relative h-[300px]">
          <Shoe {...SHOES[0]} />
        </div>
      </div>
    ) : null;
  }

  return (
    <div className="pointer-events-none absolute right-[2vw] top-1/2 z-0 w-[46vw] max-w-[560px] -translate-y-[30%]">
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
              exit: { opacity: 0, y: -16, filter: "blur(2px)", transition: { duration: 0.35 } },
            }}
            className="relative h-[clamp(280px,38svh,420px)]"
          >
            {SHOES.map((s, i) => (
              <motion.div
                key={s.src}
                variants={{
                  hidden: { opacity: 0, y: 32, filter: "blur(2px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: beatTransition(),
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
            initial={{ opacity: 0, y: 32, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(2px)", transition: { duration: 0.35 } }}
            transition={beatTransition()}
            className="relative flex justify-end"
          >
            <FitCard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
