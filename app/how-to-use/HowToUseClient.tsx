"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Play, PlayCircle } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@MBDProject";

const TUTORIALS = [
  { id: "wmQDpA76RW4", title: "Jumper JPD-600P" },
  { id: "gCJucS7ViCQ", title: "วิธีการใช้งานเครื่อง Mediblu รุ่น BLU12 และโปรแกรม Central Monitor" },
  { id: "LBHISidol-0", title: "วิธีการใช้งาน Warmer เต็มรูปแบบ" },
  { id: "YbGOUCkuqsw", title: "วิธีการใช้งานโปรแกรม Central Monitor สำหรับเครื่อง Mediblu BLU12" },
  { id: "B4h9YIOfsrA", title: "วิธีการใช้งานโปรแกรม Central Monitor สำหรับ Mediblu MM12" },
  { id: "-BuYy285ArI", title: "Transport Incubator KT-1000" },
  { id: "jbrEFMPsGbg", title: "Comen S8" },
  { id: "HKivR-nYOxU", title: "วิธีการใช้งานเครื่อง Mediblu รุ่น BLU12" },
  { id: "8XkZ2yVxlsE", title: "เตียงผ่าตัด Health TDY-Y-2" },
  { id: "k_bZYDVgqdw", title: "วิธีการใช้งานเครื่อง Mediblu รุ่น MM12" },
  { id: "ocUQ5zhrehw", title: "Mediblu MM3" },
  { id: "d3cZICV71KU", title: "คู่มือการใช้งานเบื้องต้นโปรแกรม Jumper Medical" },
  { id: "F2Y98O8y_Yo", title: "Central Monitor Blue12+" },
  { id: "29D2sPwWgTk", title: "Mesist Mevacs 50" },
  { id: "GTzWiiJkDG0", title: "Jumper JPD-200C Plus" },
  { id: "Ohv4rxDm9MQ", title: "Phototherapy Bililed Maxi Plus" },
  { id: "otZyNQBh9LM", title: "Novos Bilisphere 360 LED" },
  { id: "VkKEu_7lbA4", title: "Masimo Rad-G" },
];

export default function HowToUseClient() {
  const [activeId, setActiveId] = React.useState<string | null>(null);

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
                รวมคลิปสาธิตวิธีใช้งานอุปกรณ์รุ่นต่างๆ จากช่อง YouTube ของเรา
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

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TUTORIALS.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveId(video.id)}
                className="group overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="h-full w-full object-cover grayscale-[15%] transition group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* consistent brand-tint overlay so every thumbnail reads as one series */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a3a5c]/55 via-[#0a3a5c]/10 to-black/60" />
                  <div className="absolute inset-0 bg-[#41b2fd]/10 mix-blend-multiply" />

                  {/* top-left kicker badge */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0a3a5c] shadow">
                    <PlayCircle className="h-3.5 w-3.5 text-[#41b2fd]" />
                    How to Use
                  </div>

                  {/* center play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/70 bg-white/15 text-white backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-[#41b2fd]">
                      <Play className="h-6 w-6 fill-white" />
                    </span>
                  </div>

                  {/* bottom channel bar */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/85 to-transparent px-3 pb-2.5 pt-6">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#0a3a5c]">
                      M
                    </span>
                    <span className="text-xs font-semibold text-white">
                      MBD Project
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="line-clamp-2 font-medium text-slate-800">
                    {video.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      {activeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative aspect-video w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute -top-10 right-0 text-sm font-semibold text-white hover:underline"
            >
              ปิด ✕
            </button>
            <iframe
              className="h-full w-full rounded-lg"
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
              title="MBD Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
