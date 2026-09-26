import Link from "next/link";

export function Badge({ tone, children }: { tone: "verified" | "drop" | "soldout" | "muted"; children: React.ReactNode }) {
  const styles: Record<string, string> = {
    verified: "bg-sage text-white",
    drop: "bg-clay text-white",
    soldout: "bg-concrete text-text-muted",
    muted: "bg-concrete text-text-primary",
  };
  return (
    <span className={`inline-flex items-center rounded-sm px-2 py-0.5 font-heading text-xs ${styles[tone]}`}>
      {children}
    </span>
  );
}

export function Button({
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" }) {
  const base = "rounded-md px-4 py-2 font-heading text-sm transition";
  const variants = {
    primary: "bg-sage text-white hover:opacity-90",
    secondary: "border border-strong text-text-primary hover:bg-concrete",
    ghost: "text-text-primary hover:underline",
  };
  return <button className={`${base} ${variants[variant]}`} {...props} />;
}

export function Nav() {
  return (
    <header className="border-b border-border bg-bg-primary">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-heading text-lg font-semibold">
          Circuits<span className="text-clay">&</span>Soles
        </Link>
        <div className="flex items-center gap-5 font-heading text-sm">
          <Link href="/shop">Shop</Link>
          <Link href="/culture">Culture</Link>
          <Link href="/about">About</Link>
          <Link href="/login" className="rounded-md bg-bg-inverse px-3 py-1.5 text-text-inverse">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SellerChip({ name = "C&S Verified", rating = "5.0" }: { name?: string; rating?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage font-heading text-xs text-white">
        {name.slice(0, 2).toUpperCase()}
      </div>
      <div className="text-sm">
        <p className="font-heading">{name}</p>
        <p className="text-text-muted">★ {rating} · verified seller</p>
      </div>
    </div>
  );
}

export function VerifiedMark() {
  return <Badge tone="verified">✓ Verified</Badge>;
}
