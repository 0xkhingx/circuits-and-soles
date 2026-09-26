import { Nav } from "@/components/ui";
import { ListingCard } from "@/components/listing-card";
import { products, stories } from "@/lib/data";
import Link from "next/link";
import { Badge } from "@/components/ui";

export default function Home() {
  const drops = products.filter((p) => p.isNewDrop);
  return (
    <>
      <Nav />
      <main>
        <section className="bg-bg-inverse text-text-inverse">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <Badge tone="drop">Community-first marketplace</Badge>
            <h1 className="mt-4 max-w-2xl font-heading text-3xl leading-tight md:text-5xl">
              Real streetwear. Verified drops. Culture first.
            </h1>
            <p className="mt-4 max-w-xl text-text-inverse/80">
              Curated sneakers + streetwear. Every pair checked before it lists. Buy via WhatsApp today — full checkout in test mode for demo.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/shop" className="rounded-md bg-sage px-5 py-2.5 font-heading text-sm text-white">
                Shop drops
              </Link>
              <Link href="/culture" className="rounded-md border border-text-inverse/30 px-5 py-2.5 font-heading text-sm">
                Read culture
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-xl">New drops</h2>
            <Link href="/shop" className="text-sm text-text-muted underline">View all</Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
            {drops.map((p) => <ListingCard key={p.id} product={p} />)}
          </div>
        </section>

        <section className="border-y border-border bg-bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="font-heading text-xl">Verified listings</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
              {products.slice(0, 4).map((p) => <ListingCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-heading text-xl">From the culture</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {stories.map((s) => (
              <Link key={s.slug} href={`/culture/${s.slug}`} className="overflow-hidden rounded-md border border-border">
                <div className="flex h-36 items-center justify-center bg-concrete/40 font-heading text-sm text-text-muted">
                  {s.category}
                </div>
                <div className="p-4">
                  <Badge tone="drop">{s.category}</Badge>
                  <h3 className="mt-2 font-heading text-base">{s.headline}</h3>
                  <p className="mt-1 text-sm text-text-muted">{s.readTime} read</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-text-muted">
        Circuits&Soles — catalog MVP · WhatsApp checkout live · Stripe test-mode for demo
      </footer>
    </>
  );
}
