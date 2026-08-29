import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MBD Healthcare supplies and services premium medical devices end-to-end, certified to ISO 9001:2015, serving hospitals and clinics across Thailand.",
  alternates: { canonical: "/about-us" },
  robots: { index: true, follow: true },
  openGraph: { title: "MBD Healthcare / About Us", url: "/about-us" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <AboutUsClient />;
}
