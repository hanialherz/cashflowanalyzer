import { auth } from "@/lib/auth";

export const proxy = auth;

export const config = { matcher: ["/dashboard/:path*", "/50-30-20"] };
