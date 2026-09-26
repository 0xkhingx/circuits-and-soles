import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/culture", label: "Culture" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Drops" },
];

export function Nav() {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
      {/* Left: search + links (Skot-exact cluster) */}
      <div className="flex flex-1 items-center gap-5">
        <button
          aria-label="Search"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-sm text-white"
        >
          ⌕
        </button>
        <nav className="hidden items-center gap-5 font-heading text-[13px] text-text-primary lg:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:opacity-60">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Center: brand lockup */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/logo/symbol-sage.png"
          alt="Circuits&Soles symbol"
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
        <Image
          src="/assets/logo/wordmark.png"
          alt="Circuits&Soles"
          width={160}
          height={24}
          className="hidden h-5 w-auto object-contain sm:block"
          priority
        />
      </Link>

      {/* Right: actions cluster */}
      <div className="flex flex-1 items-center justify-end gap-2">
        <button
          aria-label="Notifications"
          className="relative hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-sm sm:flex"
        >
          ○<span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-clay" />
        </button>
        <Link
          href="/about"
          className="hidden rounded-full border border-border bg-white px-4 py-2 font-heading text-[13px] md:block"
        >
          Contact us
        </Link>
        <button
          aria-label="Settings"
          className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-sm sm:flex"
        >
          ⚙
        </button>
        <Link
          href="/shop"
          className="flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 font-heading text-[13px] text-white"
        >
          Cart
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bone text-[11px] text-charcoal">
            0
          </span>
        </Link>
      </div>
    </div>
  );
}
