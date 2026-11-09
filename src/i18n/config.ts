export const locales = ["ko", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const languageNames: Record<Locale, string> = {
    ko: "한국어",
    en: "English",
};

// 언어별 폰트 클래스
export const localeFonts: Record<Locale, string> = {
    ko: "font-pretendard",
    en: "font-lexend",
};

export function isLocale(value: string): value is Locale {
    return locales.includes(value as Locale);
}