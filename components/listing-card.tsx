import Link from "next/link";
import type { Product } from "@/lib/data";
import { Badge } from "./ui";

export function ListingCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/listing/${product.id}`}
      className="group overflow-hidden rounded-md border border-border bg-white"
    >
      <div className="flex h-48 items-center justify-center bg-concrete/40 font-heading text-text-muted">
        {product.brand}
      </div>
      <div className="space-y-1 p-4">
        <div className="flex gap-2">
          {product.verified && <Badge tone="verified">✓ Verified</Badge>}
          {product.isNewDrop && <Badge tone="drop">New drop</Badge>}
        </div>
        <p className="text-xs text-text-muted">{product.brand}</p>
        <h3 className="font-heading text-sm">{product.name}</h3>
        <p className="font-body text-base font-medium">₦{product.price.toLocaleString()}</p>
        <p className="text-xs text-text-muted">{product.sizes.join(" · ")} · {product.condition}</p>
      </div>
    </Link>
  );
}
