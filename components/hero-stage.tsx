"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TextStream } from "./block/text-stream";
import { HeroModel } from "./hero-model";

const WORDS = ["Sneakers", "Streetwear", "Community", "Culture"];

// Concept-proof washes — one per word. Replaced by real popout
// PNGs at public/popouts/<word>.png when assets land.
const WASHES = ["bg-sage", "bg-clay", "bg-charcoal", "bg-concrete"];

export function HeroStage() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden bg-concrete/50">
      <Image
        src="/assets/patterns/circuit-tile.png"
        alt=""
        fill
        className="object-cover opacity-[0.12]"
        priority={false}
      />

      {/* Synced color wash — proves word ↔ visual timing */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.22 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`absolute inset-0 ${WASHES[active]}`}
        />
      </AnimatePresence>

      {/* Scrolling words behind the model */}
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

      {/* Model stays dominant on top */}
      <div className="relative z-10">
        <HeroModel />
      </div>

      {/* Proof readout — shows the synced word; remove with final popouts */}
      <div className="absolute bottom-4 left-4 z-20 rounded-full bg-charcoal px-4 py-1.5 font-heading text-xs text-white">
        now: {WORDS[active]}
      </div>
    </section>
  );
}
