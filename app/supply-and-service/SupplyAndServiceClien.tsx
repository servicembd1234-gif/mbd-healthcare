"use client";

import React from "react";
import {
  Truck,
  Wrench,
  ClipboardCheck,
  GraduationCap,
  PhoneCall,
  Check,
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactLocation from "@/components/shared/home/ContactLocation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SUPPLY_ITEMS = [
  "Ultrasound, patient monitoring, NICU solutions, and OR devices",
  "Vital-sign monitors, analyzers, and nursing support equipment",
  "Accessories, spare parts, and related consumables",
];

const SERVICE_ITEMS = [
  "Installation, calibration, and acceptance testing",
  "Preventive maintenance (PM) and corrective repair",
  "Genuine spare parts and fast ticket handling",
];

const PROCESS_STEPS = [
  {
    icon: PhoneCall,
    title: "Consultation",
    description: "We assess your clinical needs and recommend the right equipment for your use case.",
  },
  {
    icon: Truck,
    title: "Supply & Installation",
    description: "Equipment is delivered, installed, and commissioned to manufacturer specifications.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Clinical staff are trained for safe, effective operation and daily upkeep.",
  },
  {
    icon: Wrench,
    title: "After-Sales Service",
    description: "Ongoing preventive maintenance, calibration, and rapid repair support.",
  },
];

export default function SupplyAndServiceClient() {
  return (
    <>
      <Header />
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="h-60 rounded-2xl p-8 bg-[url('/untitled-design.svg')] bg-cover bg-center bg-no-repeat">
            <Breadcrumbs />
            <h2 className="text-2xl md:text-4xl font-bold">Supply &amp; Service</h2>
          </div>

          <div className="mt-10 rounded-2xl border bg-white p-6 sm:p-10">
            <p className="text-slate-600 leading-relaxed">
              MBD Healthcare supplies and services premium medical devices
              end-to-end - from consultation and solution design to
              installation, acceptance testing, and ongoing maintenance,
              certified to ISO 9001:2015 for its Quality Management System.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Supply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {SUPPLY_ITEMS.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {SERVICE_ITEMS.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold">How It Works</h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map(({ icon: Icon, title, description }, idx) => (
                <Card key={title}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#41b2fd] text-sm font-bold text-white">
                        {idx + 1}
                      </span>
                      <Icon className="h-5 w-5 text-[#41b2fd]" />
                    </div>
                    <CardTitle className="mt-2 text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5" />
                Quality Assured
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              ISO 9001:2015 QMS governs purchasing, document control, service
              delivery, and risk management - aligning our team to
              measurable outcomes you can trust.
            </CardContent>
          </Card>
        </div>

        <ContactLocation />
      </section>
      <Footer />
    </>
  );
}
