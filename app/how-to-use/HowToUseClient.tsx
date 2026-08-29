"use client";

import React from "react";
import { Clock } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function HowToUseClient() {
  return (
    <>
      <Header />
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="h-60 rounded-2xl p-8 bg-[url('/untitled-design.svg')] bg-cover bg-center bg-no-repeat">
            <Breadcrumbs />
            <h2 className="text-2xl md:text-4xl font-bold">How to use</h2>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border bg-white px-6 py-20 text-center">
            <Clock className="h-10 w-10 text-[#41b2fd]" />
            <h3 className="mt-4 text-2xl font-bold text-slate-800">
              Coming Soon!
            </h3>
            <p className="mt-2 max-w-md text-slate-600">
              We&rsquo;re preparing step-by-step guides for using our
              equipment. Please check back soon.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
