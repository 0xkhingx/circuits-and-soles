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
      <div className="flex flex-1 items-center gap-4">
        <button
          aria-label="Search"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-white"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>
        <button aria-label="Menu" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white lg:hidden">
          <svg width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <nav className="hidden items-center gap-5 font-heading text-[13px] text-text-primary lg:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:opacity-60">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Center: brand lockup — symbol image + Sora wordmark (avoids PNG matte issues) */}
      <Link href="/" className="flex items-center gap-2" aria-label="Circuits&Soles home">
        <Image
          src="/assets/logo/symbol-sage.png"
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
        <span className="hidden font-heading text-[17px] font-semibold tracking-tight sm:block">
          circuits<span className="text-sage">&</span>soles
        </span>
      </Link>

      {/* Right: actions cluster */}
      <div className="flex flex-1 items-center justify-end gap-2">
        <button
          aria-label="Notifications"
          className="relative hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-white sm:flex"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
            <path d="M10 20a2 2 0 0 0 4 0" />
          </svg>
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-clay" />
        </button>
        <Link
          href="/about"
          className="hidden rounded-full border border-border bg-white px-4 py-2 font-heading text-[13px] md:block"
        >
          Contact us
        </Link>
        <button
          aria-label="Settings"
          className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-white sm:flex"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z" />
          </svg>
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
