"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

type Crumb = { label: string; href?: string };

type Props = {
  rootLabel?: string;
  overrides?: Record<string, string>;
  hideRoot?: boolean;
  transformLabel?: (segment: string) => string;
  trail?: Crumb[];
};

function defaultTransform(s: string) {
  const cleaned = decodeURIComponent(s).replace(/-/g, " ");
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function isLikelyId(seg: string) {
  return /^[0-9a-f-]{8,}$/i.test(seg) || /^\d{6,}$/.test(seg);
}

export default function Breadcrumbs({
  rootLabel = "Home",
  overrides = {},
  hideRoot = false,
  transformLabel = defaultTransform,
  trail,
}: Props) {
  const pathname = usePathname() || "/";
  const pathOnly = pathname.split("?")[0].split("#")[0];

  let items: Crumb[] = [];

  if (trail && trail.length) {
    items = trail;
  } else {
    const segments = pathOnly.split("/").filter(Boolean);
    const crumbs: Crumb[] = [];

    if (!hideRoot) {
      crumbs.push({ label: rootLabel, href: "/" });
    }

    let hrefAcc = "";
    segments.forEach((seg, idx) => {
      hrefAcc += `/${seg}`;
      const isLast = idx === segments.length - 1;

      const label =
        overrides[seg] ?? (isLikelyId(seg) ? "Detail" : transformLabel(seg));

      crumbs.push({
        label,
        href: isLast ? undefined : hrefAcc,
      });
    });

    items = crumbs;
  }

  return (
<Breadcrumb>
  <BreadcrumbList className="text-black">
    {items.map((item, i) => {
      const isLast = i === items.length - 1;
      return (
        <React.Fragment key={`${item.label}-${i}`}>
          <BreadcrumbItem>
            {isLast || !item.href ? (
              <BreadcrumbPage className="font-semibold">{item.label}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink asChild>
                <Link href={item.href}>{item.label}</Link>
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
          {!isLast && <BreadcrumbSeparator />}
        </React.Fragment>
      );
    })}
  </BreadcrumbList>
</Breadcrumb>
  );
}
