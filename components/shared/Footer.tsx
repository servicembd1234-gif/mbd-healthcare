import { Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[#41b2fd]">
            MBD Surgical Supply Co., Ltd.
          </p>
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} MBD Healthcare. All rights reserved. |
            Privacy Policy | Terms of Service
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Link
            href="https://www.facebook.com/MbdHealthcare"
            aria-label="Facebook"
            className="opacity-80 transition hover:opacity-100"
          >
            <Facebook className="w-10 h-10 text-white  bg-blue-500 rounded-sm p-1" />
          </Link>
          <Link
            href="https://www.youtube.com/@MBDProject"
            aria-label="YouTube"
            className="opacity-80 transition hover:opacity-100"
          >
            <Youtube className="w-10 h-10 text-white  bg-red-500 rounded-sm p-1" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
