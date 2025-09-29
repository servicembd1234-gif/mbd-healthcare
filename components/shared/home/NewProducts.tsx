import React from "react";
import ProductCard from "../ProductCard";

const TOP_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Jumper JPD-600P",
    partner: "jumper",
    category: "Patient Monitor / Central Monitor",
    badge: "new",
    image: "/images/products/news/jumper jpd-600p.svg",
    desc: "A high-performance fetal monitor designed for continuous monitoring of fetal heart rate and uterine contractions, ideal for hospitals and clinics to support safe pregnancy management."
  },
  {
    id: "2",
    name: "Jumper JPD-300P",
    partner: "jumper",
    category: "Patient Monitor / Central Monitor",
    badge: "new",
    image: "/images/products/news/jumper jpd-300p.svg",
    desc: "A portable fetal monitor offering reliable fetal heart rate tracking with a compact design, perfect for use in clinics, home care, or mobile medical services."
  },
  {
    id: "3",
    name: "Jumper HA120",
    partner: "jumper",
    category: "Blood Pressure Monitor",
    image: "/images/products/news/jumper ha120.svg",
    desc: "A digital blood pressure monitor that provides accurate and quick measurements, featuring an easy-to-read display and user-friendly interface for home and clinical use."
  },
  {
    id: "4",
    name: "Radiant Wammer KR-1000",
    partner: "novos",
    category: "Electrosurgical Unit",
    image: "/images/products/news/novos kr-1000.svg",
    desc: "An AED (Automated External Defibrillator) with voice prompts and simple operation, designed for emergency cardiac care in public spaces, clinics, and hospitals."
  },
];

const NewProducts = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-start">
          <div>
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <p className="mt-1 text-slate-600">
              Recently added products from our partners.
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOP_PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default NewProducts;
