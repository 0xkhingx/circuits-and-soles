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
    <div className="grid grid-cols-[1fr_auto_1fr] items-center px-5 py-4 md:px-8">
      {/* Left cluster: search anchor + text links */}
      <div className="flex items-center gap-8">
        <button
          aria-label="Search"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal text-white"
        >
          <SearchIcon size={18} stroke={2.2} />
        </button>
        <nav className="hidden items-center gap-9 text-[13px] tracking-wide text-charcoal lg:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:opacity-60">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Center: logo mark only, true horizontal center */}
      <Link href="/" aria-label="Circuits&Soles home" className="justify-self-center">
        <Image
          src="/assets/logo/symbol.svg"
          alt=""
          width={34}
          height={34}
          className="h-8 w-8"
          priority
        />
      </Link>

      {/* Right cluster: toggle + contact + support + cart */}
      <div className="flex items-center justify-end gap-2">
        {/* Theme toggle — half black / half white split knob */}
        <button
          aria-label="Toggle theme"
          className="hidden h-[34px] w-[70px] items-center rounded-full border border-black/10 bg-white px-1 sm:flex"
        >
          <span
            className="h-6 w-6 rounded-full border border-black/20"
            style={{ background: "linear-gradient(90deg, #1A1A1A 50%, #ffffff 50%)" }}
          />
        </button>
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
