import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 ">
      <div className="grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 bg-[url('/images/untitled-design1.svg')] rounded-lg">
        <div>
          <Badge className="mb-4 bg-[#41b2fd] hover:bg-[#2aa4f3]">
            Premium Medical Devices
          </Badge>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Trusted International Medical Equipment Importer
          </h1>
          <p className="mt-4 text-slate-600">
            We specialize in importing and distributing certified, high-quality
            medical devices from leading global brands. Our mission is to
            deliver advanced, reliable solutions that meet international
            standards, ensuring safety, performance, and peace of mind for
            healthcare professionals and patients alike. With a strong
            commitment to excellence, we provide responsive after-sales support
            to help you deliver the best possible care.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-[#41b2fd] hover:bg-[#2aa4f3] font-semibold text-md">
              <Link href="/equipment">Browse Equipment</Link>
            </Button>
            <Button asChild variant="outline" className="font-semibold text-md">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
