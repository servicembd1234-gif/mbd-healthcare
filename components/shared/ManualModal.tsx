"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldAlert, X } from "lucide-react";
import { Product } from "@/public/types/product.type";
import { TutorialVideo } from "@/public/data/productVideos";

export default function ManualModal({
  product,
  highlights,
  videos,
  onClose,
  onPlayVideo,
}: {
  product: Product;
  highlights: string[];
  videos?: TutorialVideo[];
  onClose: () => void;
  onPlayVideo: (id: string) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-50 to-slate-50">
            <Image
              src={product.image}
              width={56}
              height={56}
              alt={product.name}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
            <p className="text-xs uppercase text-slate-500">{product.partner}</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-600 leading-relaxed">{product.desc}</p>

        {highlights.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-slate-800">จุดเด่น / วิธีใช้เบื้องต้น</h4>
            <ul className="mt-2 space-y-1.5">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#41b2fd]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {videos && videos.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-slate-800">วิดีโอสาธิต</h4>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {videos.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => onPlayVideo(v.id)}
                  className="group relative aspect-video overflow-hidden rounded-lg border"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#41b2fd]">
                      ▶
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            ข้อมูลนี้เป็นภาพรวมทั่วไปเท่านั้น กรุณาปฏิบัติตามคู่มือการใช้งานฉบับเต็ม
            (IFU) ที่มาพร้อมเครื่อง หรือ{" "}
            <Link href="/#contact" onClick={onClose} className="font-semibold underline">
              ติดต่อทีม MBD Healthcare
            </Link>{" "}
            สำหรับรายละเอียดการใช้งานที่ถูกต้องและปลอดภัย
          </p>
        </div>
      </div>
    </div>
  );
}
