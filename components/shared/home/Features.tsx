import React from "react";

const Features = () => {
  return (
    <section id="features" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 ">
        <div className="flex items-end justify-start">
          <div>
            <h2 className="text-2xl font-bold">Why Choose MBD Healthcare?</h2>
            <p className="mt-1 text-slate-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
              quaerat!
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Certified Quality",
              "ISO 9001 Certified for quality management standards.",
            ],
            ["Fast Delivery", "Express worldwide shipping with tracking."],
            ["Expert Support", "24/7 technical support & maintenance."],
            [
              "Competitive Pricing",
              "Great prices with flexible payment options.",
            ],
            [
              "Complete Documentation",
              "Certs, manuals, and warranty with every purchase.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-transparent bg-white p-6 text-center shadow-sm transition
                               hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_8px_25px_rgba(65,178,253,.2)]"
            >
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
