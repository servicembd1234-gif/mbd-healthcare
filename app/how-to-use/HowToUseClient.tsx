"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Youtube, Play, PlayCircle, BookOpen } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import VideoModal from "@/components/shared/VideoModal";
import ManualModal from "@/components/shared/ManualModal";
import { RAW_PRODUCTS } from "@/public/data/products";
import { PRODUCT_VIDEOS, GENERAL_VIDEOS, TutorialVideo } from "@/public/data/productVideos";
import { PRODUCT_MANUALS } from "@/public/data/productManuals";
import { Product } from "@/public/types/product.type";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@MBDProject";

function VideoThumb({
  video,
  onPlay,
}: {
  video: TutorialVideo;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border bg-slate-200 text-left shadow-sm transition hover:shadow-md"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        className="h-full w-full object-cover grayscale-[15%] transition group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a3a5c]/55 via-[#0a3a5c]/10 to-black/60" />
      <div className="absolute inset-0 bg-[#41b2fd]/10 mix-blend-multiply" />
      <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#0a3a5c] shadow">
        <PlayCircle className="h-3 w-3 text-[#41b2fd]" />
        How to Use
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/70 bg-white/15 text-white backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-[#41b2fd]">
          <Play className="h-5 w-5 fill-white" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-2.5 pb-2 pt-6">
        <p className="line-clamp-2 text-xs font-medium text-white">
          {video.title}
        </p>
      </div>
    </button>
  );
}

export default function HowToUseClient() {
  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  return (
    <>
      <Header />
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="relative h-60 overflow-hidden rounded-2xl p-8 bg-[url('/images/hero-how-to-use.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative">
              <Breadcrumbs className="text-white [&_svg]:text-white/70 [&_a]:text-white/80" />
              <h2 className="text-2xl md:text-4xl font-bold text-white">How to use</h2>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-6 sm:flex-row sm:p-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                วิดีโอสอนวิธีใช้งานเครื่องมือแพทย์
              </h3>
              <p className="mt-1 text-slate-600">
                คู่มือภาพรวม + วิดีโอสาธิต แยกตามรุ่นเครื่องที่มีในเว็บไซต์
              </p>
            </div>
            <Link
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#FF0000] px-5 py-3 font-semibold text-white transition hover:bg-[#e50000]"
            >
              <Youtube className="h-5 w-5" />
              เข้าชมช่อง YouTube ของเรา
            </Link>
          </div>

          {/* Manuals — every product on the site */}
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-800">คู่มือเครื่องมือแพทย์ทั้งหมด</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {RAW_PRODUCTS.map((product, idx) => {
                const hasVideo = !!PRODUCT_VIDEOS[product.name]?.length;
                return (
                  <button
                    key={`${product.name}-${idx}`}
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="group flex flex-col items-center rounded-2xl border bg-white p-4 text-center transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-50 to-slate-50">
                      <Image
                        src={product.image}
                        width={64}
                        height={64}
                        alt={product.name}
                        className="object-contain"
                      />
                      {hasVideo && (
                        <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF0000] text-white shadow">
                          <Play className="h-2.5 w-2.5 fill-white" />
                        </span>
                      )}
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm font-medium text-slate-800">
                      {product.name}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#41b2fd]">
                      <BookOpen className="h-3 w-3" />
                      ดูคู่มือ
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* General / uncategorized tutorials */}
          <div className="mt-10 space-y-6">
            <h3 className="text-xl font-bold text-slate-800">วิดีโออื่นๆ</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GENERAL_VIDEOS.map((v) => (
                <VideoThumb key={v.id} video={v} onPlay={() => setActiveVideoId(v.id)} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {selectedProduct && (
        <ManualModal
          product={selectedProduct}
          highlights={PRODUCT_MANUALS[selectedProduct.name] ?? []}
          videos={PRODUCT_VIDEOS[selectedProduct.name]}
          onClose={() => setSelectedProduct(null)}
          onPlayVideo={(id) => {
            setSelectedProduct(null);
            setActiveVideoId(id);
          }}
        />
      )}

      {activeVideoId && (
        <VideoModal videoId={activeVideoId} onClose={() => setActiveVideoId(null)} />
      )}
    </>
  );
}
