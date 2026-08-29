import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isProtectedApiRoute = createRouteMatcher(["/api/repair-receipts(.*)"]);
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (isPublicRoute(req)) return;

  if (!userId && (isAdminRoute(req) || isProtectedApiRoute(req))) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  if (userId && req.nextUrl.pathname === "/admin") {
    const dashboardUrl = new URL("/admin/dashboard", req.nextUrl.origin);
    return NextResponse.redirect(dashboardUrl);
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};