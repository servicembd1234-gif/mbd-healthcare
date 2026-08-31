"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Play } from "lucide-react";
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
                    className="h-full w-full object-cover transition group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition group-hover:from-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg ring-4 ring-white/30 transition group-hover:scale-110">
                      <Play className="h-6 w-6 fill-white" />
                    </span>
                  </div>
                  <span className="absolute right-2 bottom-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                    MBD Project
                  </span>
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
