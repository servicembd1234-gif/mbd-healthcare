"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Play } from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import VideoModal from "@/components/shared/VideoModal";
import { PRODUCT_VIDEOS, GENERAL_VIDEOS, TutorialVideo } from "@/public/data/productVideos";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@MBDProject";

// flatten every tutorial video into one list, de-duplicated by id
const ALL_VIDEOS: TutorialVideo[] = (() => {
  const seen = new Set<string>();
  const list: TutorialVideo[] = [];
  const groups: TutorialVideo[][] = [...Object.values(PRODUCT_VIDEOS), GENERAL_VIDEOS];
  for (const videos of groups) {
    for (const v of videos) {
      if (!seen.has(v.id)) {
        seen.add(v.id);
        list.push(v);
      }
    }
  }
  return list;
})();

export default function HowToUseClient() {
  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);

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

          <div className="mt-8 divide-y overflow-hidden rounded-2xl border bg-white">
            {ALL_VIDEOS.map((video, idx) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideoId(video.id)}
                className="group flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-500 group-hover:bg-[#41b2fd] group-hover:text-white">
                  {idx + 1}
                </span>
                <span className="flex-1 font-medium text-slate-800">
                  {video.title}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF0000]/10 text-[#FF0000] transition group-hover:bg-[#FF0000] group-hover:text-white">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      {activeVideoId && (
        <VideoModal videoId={activeVideoId} onClose={() => setActiveVideoId(null)} />
      )}
    </>
  );
}
