import { notFound } from "next/navigation";
import { Nav, Badge, SellerChip } from "@/components/ui";
import { products, whatsappLink } from "@/lib/data";
import Link from "next/link";

export default function PDP({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();
  return (
    <>
      <Nav />
      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
        <div className="flex h-96 items-center justify-center rounded-lg bg-concrete/40 font-heading text-xl text-text-muted">
          {product.brand}
        </div>
        <div>
          <div className="flex gap-2">
            {product.verified && <Badge tone="verified">✓ Verified</Badge>}
            {product.isNewDrop && <Badge tone="drop">New drop</Badge>}
          </div>
          <p className="mt-3 text-sm text-text-muted">{product.brand} · {product.condition}</p>
          <h1 className="mt-1 font-heading text-2xl">{product.name}</h1>
          <p className="mt-2 text-xl font-semibold">₦{product.price.toLocaleString()}</p>
          <div className="mt-5">
            <p className="font-heading text-sm">Select size</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <span key={s} className="cursor-pointer rounded-md border border-strong px-4 py-2 text-sm hover:bg-concrete">{s}</span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">{product.description}</p>
          <div className="mt-5"><SellerChip /></div>
          <div className="mt-6 flex gap-3">
            <a href={whatsappLink(product)} target="_blank" className="rounded-md bg-sage px-5 py-2.5 font-heading text-sm text-white">
              Buy via WhatsApp
            </a>
            <Link href="/checkout/demo" className="rounded-md border border-strong px-5 py-2.5 font-heading text-sm">
              Stripe test checkout
            </Link>
          </div>
          <p className="mt-3 text-xs text-text-muted">Public checkout routes to WhatsApp/IG DM. Stripe link is test-mode demo only.</p>
        </div>
      </main>
    </>
  );
}
