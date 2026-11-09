
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    defaultLocale,
    isLocale,
} from "@/i18n/config";

export default function NotFoundHomeLink() {
    const pathname = usePathname();

    const firstSegment = pathname?.split("/")[1] ?? "";

    const lang = isLocale(firstSegment)
        ? firstSegment
        : defaultLocale;

    return (
        <Link
            href={`/${lang}`}
            className="font-lexendgiga inline-block px-4 py-2 text-[#e0e1cc] bg-[#3f3d66] rounded-md hover:bg-[#1f1e33] tracking-[-0.1em] font-[600] transition-colors"
        >
            Return to Main page
        </Link>
    );
}
