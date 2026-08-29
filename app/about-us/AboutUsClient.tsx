"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Wrench,
  Microscope,
  Earth,
  Check,
  Factory,
  Rocket,
  Users,
} from "lucide-react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "ISO 9001:2015 QMS" },
  { icon: Wrench, label: "Preventive & Corrective Maintenance" },
  { icon: Microscope, label: "Clinical Workflow Expertise" },
  { icon: Earth, label: "Nationwide Coverage" },
];

const MISSION_ITEMS = [
  "Select compliant, context-appropriate devices for each clinical use case",
  "Install and commission equipment to manufacturer specs with complete documentation",
  "Provide rapid after-sales support with proactive PM and transparent reports",
  "Train clinical staff for safe, effective operation and upkeep",
  "Continuously improve processes under the ISO 9001:2015 framework",
];

const SOURCING_ITEMS = [
  "Ultrasound, patient monitoring, NICU solutions, and OR devices",
  "Vital-sign monitors, analyzers, and nursing support equipment",
  "Accessories and related consumables",
];

const TECHNICAL_ITEMS = [
  "Site survey, solution design, and technical documentation",
  "Installation, calibration/verification, and acceptance tests",
  "Preventive maintenance (PM) and repair by qualified engineers",
];

const FEATURE_CARDS = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "ISO 9001:2015 QMS governs purchasing, document control, service delivery, and risk management-aligning teams to measurable outcomes.",
  },
  {
    icon: Wrench,
    title: "After-Sales Excellence",
    description:
      "Field service with calibrated tools and spare-parts readiness; fast ticket handling and transparent PM/CM reporting.",
  },
  {
    icon: Microscope,
    title: "Domain Expertise",
    description:
      "Deep know-how in ultrasound, monitoring, labor & delivery, NICU, and workflow integration across hospital units.",
  },
];

const MILESTONES = [
  {
    label: "Foundational phase:",
    description: "Began supplying and supporting medical devices in Northern Thailand",
  },
  {
    label: "Scale-up:",
    description: "Expanded product lines to cover ER, L&D, ICU/CCU, and OR",
  },
  {
    label: "Quality maturity:",
    description: "Achieved ISO 9001:2015 certification and continuous improvement",
  },
];

export default function AboutUsClient() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <section aria-labelledby="about-hero" className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <Badge className="bg-[#41b2fd] text-white">MBD Healthcare</Badge>
              <h1
                id="about-hero"
                className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
              >
                Premium Medical Devices, Service, &amp; Solutions
              </h1>
              <p className="pt-4 text-base text-muted-foreground sm:text-lg">
                A trusted partner for hospitals, clinics, and healthcare
                providers across Thailand-delivering quality equipment,
                expert installation, and reliable after-sales service.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {label}
                  </li>
                ))}
              </ul>
              <Separator className="my-4" />
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  Quality Management System
                </p>
                <h3 className="mt-2 text-2xl font-bold">Certified to ISO 9001:2015</h3>
                <p className="mt-2 text-muted-foreground">
                  Processes you can trust • Service you can measure • Outcomes you can verify
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/images/hero-about-us.jpg"
                  alt="MBD Healthcare installation & service"
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover sm:h-80 md:h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>

          <section className="mt-10">
            <div className="space-y-10">
              <Card>
                <CardHeader>
                  <CardTitle>About Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">MBD Healthcare</span>{" "}
                    supplies and services premium medical devices end-to-end-
                    from consultation and solution design to installation,
                    acceptance testing, and ongoing maintenance. We prioritize
                    international standards and user safety across all
                    clinical environments.
                  </p>
                  <p>
                    The company is certified to{" "}
                    <span className="font-semibold">ISO 9001:2015</span> for
                    its Quality Management System, ensuring structured
                    processes, transparency, and full traceability throughout
                    purchasing, service delivery, and risk management.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Vision</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    To be Thailand&rsquo;s trusted medical-device
                    partner-elevating patient care through modern technology,
                    responsive service, and detail-oriented experts.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      {MISSION_ITEMS.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed">
                          <Check className="mt-1 h-4 w-4 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="h-5 w-5" />
                    Scope of Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold">Sourcing &amp; Distribution</h4>
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                      {SOURCING_ITEMS.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed">
                          <Check className="mt-1 h-4 w-4 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Technical Services</h4>
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                      {TECHNICAL_ITEMS.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed">
                          <Check className="mt-1 h-4 w-4 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3">
                {FEATURE_CARDS.map(({ icon: Icon, title, description }) => (
                  <Card key={title}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      {description}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Milestones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4 text-muted-foreground">
                    {MILESTONES.map((m) => (
                      <li key={m.label}>
                        <span className="font-semibold text-foreground">{m.label}</span>{" "}
                        {m.description}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Earth className="h-5 w-5" />
                      Coverage
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Serving public and private hospitals, specialty clinics,
                    and academic institutions nationwide-with onsite and
                    remote support.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Get in Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    For product information, quotations, or live
                    demonstrations, contact our team-we&rsquo;re ready to help.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
