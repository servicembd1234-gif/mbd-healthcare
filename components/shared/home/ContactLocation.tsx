import { Mail, MapPin, Phone, Printer } from "lucide-react";
import React from "react";

const ContactLocation = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div>
        <h2 className="text-2xl font-bold">Contact & Address</h2>
        <p className="mt-1 text-slate-600">
          We’re here to help with product selection and service support.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 border rounded-lg bg-white overflow-hidden p-4">
        <div className="space-y-4">
          <h1 className="text-lg font-semibold">Chiang Mai Office</h1>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-[#41b2fd]" />
            <p>
              99-101-103 Kaew Namarat Rd, Wat Ket, Chiang Mai 50000
              <br />
              Thailand
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-[#41b2fd]" />
            <a href="tel:+6653240640" className="hover:underline">
              0-53240-640-2 , 081-980-0404
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-[#41b2fd]" />
            <a
              href="mailto:info@mbd-healthcare.com"
              className="hover:underline"
            >
              info@mbd-healthcare.com
            </a>
          </div>
          <div className="text-sm text-slate-600">
            <p>
              <span className="font-medium">Service Hours:</span> Mon – Fri,
              8:00–17:00 <span className="mx-1">|</span> Sat 8:00–15:00
            </p>
          </div>
        </div>
        <div className="h-64 md:h-auto">
          <iframe
            title="MBD Healthcare Location"
            src="https://www.google.com/maps?q=18.839160065615893, 98.99923429896076&z=15&output=embed"
            className="w-full h-full rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 border rounded-lg bg-white overflow-hidden p-4">
        <div className="space-y-4">
          <h1 className="text-lg font-semibold">Bangkok Office</h1>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-[#41b2fd]" />
            <p>
              288 Soi Phuangmee 21, Sukumvit Rd, Bangchak, Prakanong, Bangkok
              10260
              <br />
              Thailand
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-[#41b2fd]" />
            <a href="tel:+6653240640" className="hover:underline">
              0-2742-6759
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Printer className="h-5 w-5 text-[#41b2fd]" />
            <a href="tel:+6653240642" className="hover:underline">
              0-2742-4752
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-[#41b2fd]" />
            <a
              href="mailto:info@mbd-healthcare.com"
              className="hover:underline"
            >
              info@mbd-healthcare.com
            </a>
          </div>
          <div className="text-sm text-slate-600">
            <p>
              <span className="font-medium">Service Hours:</span> Mon – Fri,
              8:00–17:00 <span className="mx-1">|</span> Sat 8:00–15:00
            </p>
          </div>
        </div>
        <div className="h-64 md:h-auto">
          <iframe
            title="MBD Healthcare Location"
            src="https://www.google.com/maps?q=13.704363694462721,100.61689878273498&z=15&output=embed"
            className="w-full h-full rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
