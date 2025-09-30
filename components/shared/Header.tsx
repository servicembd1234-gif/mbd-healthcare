import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import MoblieMenu from "./MoblieMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/homepage/header-logo.png"
              alt="MBD Healthcare"
              width={160}
              height={160}
              className="rounded"
            />
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/equipment">Equipment</NavLink>
            <NavLink
              href="https://surgical-instruments.bbraun.com/en-01"
              target="_blank"
            >
              Instrument
            </NavLink>
            {/* <NavLink href="/supply-and-service">Supply & Service</NavLink>
            <NavLink href="/how-to-use">How to Use</NavLink>
            <NavLink href="/about-us">About Us</NavLink> */}
          </ul>
        </nav>
        <MoblieMenu />
      </div>
    </header>
  );
};

export default Header;