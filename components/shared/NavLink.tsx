import Link from "next/link";
import React from "react";

const NavLink = ({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: "_blank";
}) => {
  return (
    <li>
      <Link
        href={href}
        target={target}
        className="relative text-slate-700 transition-colors hover:text-[#41b2fd] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#41b2fd] after:transition-all hover:after:w-full"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
