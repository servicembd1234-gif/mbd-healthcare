import type { Metadata } from "next";
import SupplyAndServiceClien from "./SupplyAndServiceClien";

export const metadata: Metadata = {
  title: "Supply and Service",
  description:
    "Explore certified medical equipment from leading global brands with responsive after-sales service.",
  alternates: { canonical: "/supply-and-service" },
  robots: { index: true, follow: true },
  openGraph: { title: "MBD Healthcare / Supply&Service", url: "/supply-and-service" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <SupplyAndServiceClien />;
}
