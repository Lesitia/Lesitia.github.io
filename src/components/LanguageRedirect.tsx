
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
    locales,
    defaultLocale,
    type Locale,
} from "@/i18n/config";

export default function LanguageRedirect() {
    const router = useRouter();

    useEffect(() => {
        // 브라우저 언어 설정 가져오기
        const browserLanguages = navigator.languages?.length
            ? navigator.languages
            : [navigator.language];

        // 지원하는 언어 확인
        const detectedLocale = browserLanguages
            .map((language) => language.split("-")[0].toLowerCase())
            .find((language): language is Locale =>
                locales.includes(language as Locale)
            );

        // 지원하지 않는 언어라면 기본 언어 사용
        const targetLocale = detectedLocale ?? defaultLocale;

        // 언어 페이지로 이동
        router.replace(`/${targetLocale}/`);
    }, [router]);

    return (
        <div/>
    );
}
