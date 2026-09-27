import Image from "next/image";
import Link from "next/link";
import { SearchIcon, HeadsetIcon, ShoppingBagIcon } from "./icons";

const links = [
  { href: "#", label: "About" },
  { href: "#", label: "Collections" },
  { href: "#", label: "Services" },
  { href: "#", label: "Options" },
];

export function Nav() {
  return (
    <div className="relative flex items-center justify-between px-5 py-4 md:px-8">
      {/* Left cluster: search anchor + all four text links, locked left, no wrap */}
      <div className="flex min-w-0 items-center gap-8">
        <button
          aria-label="Search"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal text-white"
        >
          <SearchIcon size={18} stroke={2.2} />
        </button>
        <nav className="hidden min-w-0 items-center gap-8 whitespace-nowrap text-[13px] tracking-wide text-charcoal lg:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="shrink-0 hover:opacity-60">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Center: logo mark only, pinned to the bar's exact midpoint */}
      <Link
        href="/"
        aria-label="Circuits&Soles home"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/assets/logo/symbol.svg"
          alt=""
          width={34}
          height={34}
          className="h-8 w-8"
          priority
        />
      </Link>

      {/* Right cluster: contact + support + cart */}
      <div className="flex shrink-0 items-center justify-end gap-2">
        <Link
          href="#"
          className="hidden h-11 items-center rounded-full border border-black/10 bg-white px-5 text-[13px] font-medium text-charcoal md:flex"
        >
          Contact us
        </Link>
        <button
          aria-label="Support"
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-charcoal sm:flex"
        >
          <HeadsetIcon size={18} stroke={2} />
        </button>
        <Link
          href="#"
          className="flex h-11 items-center gap-2 rounded-full border border-black/10 bg-white py-1.5 pl-5 pr-1.5 text-[13px] font-medium text-charcoal"
        >
          Cart
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-charcoal text-white">
            <ShoppingBagIcon size={15} stroke={2} />
          </span>
        </Link>
      </div>
    </div>
  );
}
