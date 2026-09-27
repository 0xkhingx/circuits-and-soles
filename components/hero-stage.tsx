"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TextStream } from "./block/text-stream";
import { HeroModel } from "./hero-model";

const WORDS = ["Sneakers", "Streetwear", "Community", "Culture"];

type Visual =
  | { kind: "cutout"; src: string; alt: string }
  | { kind: "photo"; src: string; alt: string }
  | { kind: "model" };

// Sneakers → wall · Streetwear → NYC photo · Community → group ·
// Culture → hero model fallback (established pattern, no asset needed).
const VISUALS: Visual[] = [
  { kind: "cutout", src: "/popouts/sneakers.png", alt: "Sneaker wall — rotating heat" },
  { kind: "photo", src: "/popouts/streetwear.jpg", alt: "Street fits in New York" },
  { kind: "cutout", src: "/popouts/community.png", alt: "Community in head-to-toe fits" },
  { kind: "model" },
];

function ActiveVisual({ visual }: { visual: Visual }) {
  if (visual.kind === "photo") {
    return (
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        className="object-cover"
        priority={false}
      />
    );
  }
  if (visual.kind === "cutout") {
    return (
      <Image
        src={visual.src}
        alt={visual.alt}
        width={750}
        height={1332}
        className="relative h-[calc(100svh-96px)] w-auto object-contain"
        priority={false}
      />
    );
  }
  return <HeroModel />;
}

export function HeroStage() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden bg-bg-primary">
      <Image
        src="/assets/patterns/circuit-tile.png"
        alt=""
        fill
        className="object-cover opacity-[0.12]"
        priority={false}
      />

      {/* Word-synced visual rotation */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}
          initial={{ opacity: 0, filter: "blur(2px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(2px)" }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ActiveVisual visual={VISUALS[active]} />
        </motion.div>
      </AnimatePresence>

      {/* Scrolling words behind the visual */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <TextStream
          items={WORDS}
          prefix="Circuits&Soles"
          fontSize="clamp(3rem, 10vw, 7rem)"
          fontWeight={600}
          height="100%"
          onActiveChange={setActive}
          className="w-full"
        />
      </div>
    </section>
  );
}
