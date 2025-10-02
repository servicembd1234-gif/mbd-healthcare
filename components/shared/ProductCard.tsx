import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import { Product } from "@/public/types/product.type";

function ProductCard({ p }: { p: Product }) {
  const img = p.image

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(65,178,253,.2)]">
      {p.badge === "bestseller" && (
        <Badge className="bg-gradient-to-r from-rose-500 to-rose-400 text-white">
          Best Seller
        </Badge>
      )}
      {p.badge === "top-rated" && (
        <Badge className="bg-gradient-to-r from-yellow-300 to-yellow-200 text-slate-800">
          Top Rated
        </Badge>
      )}
      {p.badge === "new" && (
        <Badge className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
          New
        </Badge>
      )}

      <div className="flex items-center justify-center bg-gradient-to-tr from-sky-50 to-slate-50 text-5xl text-sky-500">
        <Image
          src={img}
          width={400}
          height={200}
          alt={p.name}
          className="rounded-lg object-contain"
        />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold">{p.name}</h4>
        <p className="mt-1 text-xs text-slate-500">
          Partner: <span className="uppercase">{p.partner}</span>
        </p>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">
          {p.desc}
        </p>
        <button className="mt-4 font-semibold text-primary transition hover:-translate-y-0.5 hover:text-ring">
          Read more ...
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
