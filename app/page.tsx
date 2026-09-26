import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-concrete/60 p-3 md:p-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-bg-primary">
        <Nav />

        {/* Headline row — Skot rhythm: big Sora left, quiet trust right */}
        <section className="px-5 pt-2 md:px-8">
          <div className="flex items-start justify-between gap-6">
            <h1 className="max-w-xl font-heading text-3xl leading-tight md:text-5xl">
              Super clean{" "}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage align-middle text-base text-white">
                ⚡
              </span>
              <br />
              verified heat
            </h1>
            {/* Quiet trust signal */}
            <div className="hidden shrink-0 text-right sm:block">
              <div className="flex justify-end -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-bg-primary bg-sage" />
                <span className="h-7 w-7 rounded-full border-2 border-bg-primary bg-clay" />
                <span className="h-7 w-7 rounded-full border-2 border-bg-primary bg-charcoal text-center font-heading text-[10px] leading-6 text-white">
                  +
                </span>
              </div>
              <p className="mt-1 text-xs text-text-muted">2k+ community pickups</p>
              <p className="text-xs text-sage">★★★★★</p>
            </div>
          </div>
        </section>

        {/* Product stage — blob + circuit tile */}
        <section className="px-5 pb-6 pt-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-concrete/50">
            <Image
              src="/assets/patterns/circuit-tile.png"
              alt=""
              fill
              className="object-cover opacity-[0.15]"
              priority={false}
            />
            {/* Blob */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[130%] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-bg-primary"
              style={{ borderRadius: "45% 55% 52% 48% / 55% 48% 52% 45%" }}
            />
            {/* Hero product — shoebox placeholder until sneaker cutout lands */}
            <div className="relative mx-auto max-w-3xl px-6 py-10 md:py-14">
              <Image
                src="/assets/shoebox.png"
                alt="Circuits&Soles verified drop"
                width={1200}
                height={450}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* Meta block bottom-left */}
            <div className="absolute bottom-5 left-5 max-w-[220px] rounded-xl bg-bg-primary/90 p-4 backdrop-blur">
              <p className="font-heading text-xl">001</p>
              <p className="text-xs text-text-muted">Verified Drop</p>
              <p className="mt-2 text-xs leading-relaxed">
                Every pair checked before it lists. Community-first, no fakes.
              </p>
            </div>

            {/* Trending callout bottom-right — DB50QT pattern */}
            <Link
              href="/shop"
              className="absolute bottom-5 right-5 flex items-center gap-3 rounded-xl bg-white/90 p-3 shadow-sm backdrop-blur"
            >
              <Image
                src="/assets/logo/symbol-sage.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg bg-concrete/50 object-contain p-1"
              />
              <span>
                <span className="block font-heading text-xs">AJ1 Mocha</span>
                <span className="block text-[11px] text-text-muted">Trending alongside</span>
              </span>
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-md bg-sage px-5 py-2.5 font-heading text-sm text-white"
            >
              Shop drops
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-strong px-5 py-2.5 font-heading text-sm"
            >
              Our verification
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
