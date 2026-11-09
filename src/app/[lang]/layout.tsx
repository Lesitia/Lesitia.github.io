import "@/app/globals.css";
import Image from "next/image";
import Sidebar from "@/components/layout/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

import { ReactNode } from "react";
import { locales, isLocale, Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

import { Logo } from "@/assets";

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
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
		>
			<div className="flex flex-col flex-1 bg-(--primary) transition-color duration-200 ease-out">
				<Sidebar></Sidebar>
				<div className="fixed top-0 flex flex-row w-full h-[70px] z-100 px-[10px] py-[10px] items-center justify-between overflow-visible shadow-md/70 bg-[#7ebeee] dark:bg-(--primary) transition-color duration-200 ease-out">
					<Image
					className="dark:invert w-[50px] h-[50px]"
					src={Logo}
					alt="Next.js logo"
					width={100}
					height={20}
					priority
					/>
				</div>
				<div className={localeFontClasses[lang]}>
				{children}
				</div>
			</div>
		</ThemeProvider>
	);
}
