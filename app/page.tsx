import Image from "next/image";
import { Nav } from "@/components/nav";
import { HeroModel } from "@/components/hero-model";

export default function Home() {
  return (
    <div className="min-h-screen bg-concrete/60 p-3 md:p-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-bg-primary">
        <Nav />

        {/* Hero: model centered, viewport-filling stage */}
        <section className="relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden bg-concrete/50">
          <Image
            src="/assets/patterns/circuit-tile.png"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
            priority={false}
          />
          <HeroModel />
        </section>
      </div>
    </div>
  );
}
