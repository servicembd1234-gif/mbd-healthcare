import type { Metadata } from "next";
import HowToUseClient from "./HowToUseClient";

export const metadata: Metadata = {
  title: "How to Use",
  description: "Guides and instructions for using MBD Healthcare equipment.",
  alternates: { canonical: "/how-to-use" },
  robots: { index: true, follow: true },
  openGraph: { title: "MBD Healthcare / How to Use", url: "/how-to-use" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <HowToUseClient />;
}
