"use client"
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ProductCard from "@/components/shared/ProductCard";
import { Category, Partner, Product } from "@/public/types/product.type";
import { RAW_PRODUCTS } from "@/public/data/products";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const ALL_PRODUCTS: (Product & { id: string })[] = RAW_PRODUCTS.map((p, i) => ({
  ...p,
  id: `${slugify(p.name)}-${i}`,
}));

function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

const Page = () => {
  const [partnerTab, setPartnerTab] = React.useState<"all" | Partner>("all");
  const [q, setQ] = React.useState("");

  const partners = React.useMemo<Partner[]>(
    () => uniq(ALL_PRODUCTS.map((p) => p.partner)).sort() as Partner[],
    []
  );

  const visible = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return ALL_PRODUCTS.filter((p) => {
      const byPartner = partnerTab === "all" ? true : p.partner === partnerTab;
      const bySearch =
        query.length === 0
          ? true
          : [p.name, p.category, p.partner].some((field) =>
              String(field).toLowerCase().includes(query)
            );
      return byPartner && bySearch;
    });
  }, [partnerTab, q]);

  const grouped = React.useMemo(() => {
    const map = new Map<Category, (Product & { id: string })[]>();
    visible.forEach((p) => {
      const list = map.get(p.category) ?? [];
      list.push(p);
      map.set(p.category as Category, list);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [visible]);

  return (
    <>
      <Header />
      <section id="products" className="">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="h-60 rounded-2xl p-8 bg-[url('/untitled-design.svg')] bg-cover bg-center bg-no-repeat">
          <Breadcrumbs />
          <h2 className="text-2xl md:text-4xl font-bold">All Medical Equipmen</h2>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <div className="flex w-full sm:w-auto items-center gap-2">
              <Input
                type="text"
                placeholder="Search equipments"
                className="w-full md:w-120"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <Select
                value={partnerTab}
                onValueChange={(v) => setPartnerTab(v as typeof partnerTab)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Partner</SelectLabel>
                    <SelectItem value="all">All</SelectItem>
                    {partners.map((pt) => (
                      <SelectItem key={pt} value={pt}>
                        {pt[0].toUpperCase() + pt.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <button
                type="button"
                onClick={() => {
                  setQ("");
                  setPartnerTab("all");
                }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50"
                aria-label="Clear search and filters"
                title="Clear"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-12">
            {grouped.length === 0 && (
              <div className="text-center text-slate-500">
                No products found for the selected filter/search.
              </div>
            )}

            {grouped.map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold">{category}</h3>
                <Separator className="my-4" />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {items.map((p) => (
                    <ProductCard key={p.id} p={p} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Page;
