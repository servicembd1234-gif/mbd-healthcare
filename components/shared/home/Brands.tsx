import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brands = () => {
  const logos = [
    {
      src: "/images/brands/alpinion.svg",
      alt: "ALPINION",
      link: "https://www.alpinion.com/en/main.do",
    },
    {
      src: "/images/brands/mediblu.svg",
      alt: "MEDIBLU",
      link: "https://www.mediblumed.com/",
    },
    {
      src: "/images/brands/comen.svg",
      alt: "COMEN",
      link: "https://en.comen.com/",
    },
    {
      src: "/images/brands/jumper.svg",
      alt: "JUMPER",
      link: "https://www.jumper-medical.com/en/index.aspx",
    },
    {
      src: "/images/brands/inbody.svg",
      alt: "INBODY",
      link: "https://inbodyusa.com/",
    },
    {
      src: "/images/brands/biolight.svg",
      alt: "BIOLIGHT",
      link: "https://global.blt.com.cn/en/index.html",
    },
    {
      src: "/images/brands/bbraun.svg",
      alt: "BBRAUN",
      link: "https://www.bbraun.co.th/en.html",
    },
    {
      src: "/images/brands/novos.svg",
      alt: "Novos",
      link: "https://www.novos.com.tr/homepage/",
    },
    {
      src: "/images/brands/radian-qbio.svg",
      alt: "RADIAN-QBIO",
      link: "http://www.radianqbio.com/index_en.html",
    },
    {
      src: "/images/brands/longfian.svg",
      alt: "LONGFIAN",
      link: "https://www.longfian-oxygen.com/",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="py-10">
        <h2 className="text-2xl font-bold">Imported Brands</h2>
        <p className="mt-1 text-slate-600">
          Carefully selected global partners.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border bg-white p-4">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-10">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="relative h-16 w-36 shrink-0 transition hover:grayscale"
              >
                <Link href={logo.link}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
};

export default Brands;
