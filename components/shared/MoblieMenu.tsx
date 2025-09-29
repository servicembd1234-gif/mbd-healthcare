import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const MoblieMenu = () => {
  return (
    <details className="md:hidden">
      <summary className="list-none cursor-pointer rounded p-2 hover:bg-slate-100">
        <Menu className="h-6 w-6" />
      </summary>
      <div className="absolute left-0 right-0 mt-2 border-b bg-white shadow-sm">
        <ul className="mx-auto max-w-7xl px-4 py-4 text-sm">
          {[
            ["/", "Home"],
            ["/equipment", "Equipment"],
            ["https://surgical-instruments.bbraun.com/en-01", "Instrument"],
            // ["/supply-and-service", "Supply & Service"],
            // ["/how-to-use", "How to Use"],
            // ["/about-us", "About Us"],
          ].map(([href, label]) => (
            <li key={href} className="border-t first:border-t-0">
              <Link
                href={href}
                className="flex items-center justify-between py-3 hover:text-[#41b2fd]"
              >
                {label}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
};

export default MoblieMenu;
