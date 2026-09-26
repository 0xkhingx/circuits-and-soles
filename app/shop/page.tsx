import { Nav } from "@/components/ui";
import { ListingCard } from "@/components/listing-card";
import { products } from "@/lib/data";

export default function ShopPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams.q ?? "").toLowerCase();
  const list = products.filter(
    (p) => !q || `${p.brand} ${p.name}`.toLowerCase().includes(q)
  );
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-heading text-2xl">Shop all</h1>
        <form className="mt-4 flex gap-2">
          <input
            name="q"
            defaultValue={searchParams.q ?? ""}
            placeholder="Search brand, model…"
            className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm"
          />
          <button className="rounded-md bg-sage px-4 py-2 font-heading text-sm text-white">Search</button>
        </form>
        <p className="mt-3 text-sm text-text-muted">{list.length} results</p>
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
          {list.map((p) => <ListingCard key={p.id} product={p} />)}
        </div>
      </main>
    </>
  );
}
