import React from "react";
import ProductCard from "../ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Product } from "@/public/types/product.type";

const TOP_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Alpinion E-CUBE 8",
    partner: "alpinion",
    category: "Ultrasound",
    badge: "bestseller",
    image: "/images/products/catalogs/alpinion e cube 8.svg",
    desc: "A premium ultrasound system designed for versatile diagnostic applications, including OB/GYN, cardiology, vascular, abdominal, and small organs. It delivers high image quality with advanced features for accurate and efficient examinations.",
  },
  {
    id: "2",
    name: "Alpinion E-CUBE 12",
    partner: "alpinion",
    category: "Ultrasound",
    badge: "bestseller",
    image: "/images/products/catalogs/alpinion e cube 12.svg",
    desc: "A high-performance ultrasound machine offering enhanced imaging clarity and intuitive workflow. Ideal for comprehensive clinical use, supporting detailed diagnostics in various specialties such as cardiology, musculoskeletal, and general imaging."
  },
  {
    id: "3",
    name: "Alpinion X-CUBE 60",
    partner: "alpinion",
    category: "Ultrasound",
    image: "/images/products/catalogs/alpinion x cube 60.svg",
    desc: "A next-generation ultrasound system providing superior image resolution and fast performance. Built for advanced diagnostics, it ensures precision and efficiency across a wide range of medical fields."
  },
];

const TopProducts = () => {
  return (
    <>
      {/* <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 bg-gradient-to-br from-sky-50 to-white"> */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">Top Selling Products</h2>
            <p className="mt-1 text-slate-600">
              Most popular choices among healthcare professionals.
            </p>
          </div>
          <Button variant="link" asChild className="text-[#41b2fd]">
            <Link href="/equipment">View all</Link>
          </Button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOP_PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TopProducts;
