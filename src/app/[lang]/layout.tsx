import { ReactNode } from "react";
import { locales, isLocale, Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

import {
    pretendard,
    lexend,
} from "@/styles/fonts";

const localeFontClasses: Record<Locale, string> = {
    ko: pretendard.className,
    en: lexend.className,
};

interface LayoutProps {
    children: ReactNode;
    params: Promise<{
        lang: string;
    }>;
}

// 지원하는 모든 언어의 페이지 생성
export function generateStaticParams() {
    return locales.map((lang) => ({
        lang,
    }));
}

export default async function RootLayout({
    children,
    params,
}: LayoutProps) {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    return (
        <div className={localeFontClasses[lang]}>
            {children}
        </div>
    );
}