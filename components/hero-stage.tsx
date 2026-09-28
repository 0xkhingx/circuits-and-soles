"use client";

import { useState } from "react";
import { TextStream } from "./block/text-stream";
import { HeroCutout } from "./hero-cutout";

const WORDS = ["Sneakers", "Streetwear", "Community"];

export function HeroStage() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden bg-transparent">
      {/* Rotating cutout, offset right — the word overlaps it */}
      <HeroCutout active={active} />

      {/* Scrolling words layer over the cutout */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
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
