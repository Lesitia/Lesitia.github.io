"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ChevronDown, Globe2 } from "lucide-react";
import { flushSync } from "react-dom";

import {
    locales,
    Locale,
    languageNames,
    defaultLocale,
    isLocale,
} from "@/i18n/config";

import {
    pretendard,
    lexend,
    lexendgiga,
} from "@/styles/fonts";

interface LanguageSwitcherProps {
    onBeforeLanguageChange?: () => void;
}

// Hydration 방지용
const emptySubscribe = () => () => {};

export default function LanguageSwitcher({
    onBeforeLanguageChange,
}: LanguageSwitcherProps) {

    const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);
	const [urlSuffix, setUrlSuffix] = useState("");

	const dropdownRef = useRef<HTMLDivElement>(null);

	// 쿼리 문자열과 해시 유지
	useEffect(() => {
		const updateUrlSuffix = () => {
			setUrlSuffix(
				`${window.location.search}${window.location.hash}`
			);
		};

		updateUrlSuffix();

		window.addEventListener("hashchange", updateUrlSuffix);
		window.addEventListener("popstate", updateUrlSuffix);

		return () => {
			window.removeEventListener("hashchange", updateUrlSuffix);
			window.removeEventListener("popstate", updateUrlSuffix);
		};
	}, [pathname]);

    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );

    // 현재 URL에서 언어 확인
    const segments = pathname.split("/").filter(Boolean);

    const currentLocale: Locale =
        segments.length > 0 && isLocale(segments[0])
            ? segments[0]
            : defaultLocale;

    // 언어 변경 경로 생성
    const getLanguagePath = (nextLocale: Locale) => {
		const newSegments = [...segments];

		// 기존 언어 경로 제거
		if (newSegments.length > 0 && isLocale(newSegments[0])) {
			newSegments.shift();
		}

		// 새로운 언어 경로 추가
		const newPath =
			`/${nextLocale}` +
			(newSegments.length > 0
				? `/${newSegments.join("/")}`
				: "");

		// 쿼리 문자열과 해시 유지
		return `${newPath}${urlSuffix}`;
	};

    // 외부 영역 클릭 시 드롭다운 닫기
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // 언어별 폰트 변경
    useEffect(() => {
        document.documentElement.lang = currentLocale;

        const fontClasses = [
            pretendard.className,
            lexend.className,
            lexendgiga.className,
        ];

        document.documentElement.classList.remove(...fontClasses);

        const fontClass =
            currentLocale === "en"
                ? lexend.className
                : pretendard.className;

        document.documentElement.classList.add(fontClass);

    }, [currentLocale]);

    if (!mounted) {
        return (
            <div className="h-[44px] w-40 rounded-md bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
        );
    }

    const activeOption = {
        value: currentLocale,
        label: languageNames[currentLocale],
    };

    return (
        <div ref={dropdownRef} className="relative px-[0px]">

            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Select language"
                className="
                    flex items-center justify-between gap-2
                    w-full h-[44px] px-3
                    rounded-md
                    bg-white dark:bg-background
                    text-primary-foreground text-sm
                    hover:bg-zinc-50 dark:hover:bg-[#3f3d66]
                    font-lexendgiga tracking-[-0.1em]
                    transition-colors
                "
            >
                <span className="flex items-center gap-2 line-clamp-1">
                    <Globe2
                        size={18}
                        className="shrink-0 transition-transform duration-200"
                    />
                    <span className="line-clamp-1">
                        {activeOption.label}
                    </span>
                </span>

                {/* Animated Chevron */}
                <ChevronDown
                    size={18}
                    className={`
                        shrink-0 transition-transform duration-200
                        ${isOpen ? "rotate-0" : "rotate-180"}
                    `}
                />
            </button>

            {/* Animated Dropdown Menu */}
            <div
                aria-hidden={!isOpen}
                className={`
                    absolute bottom-full mb-1.5 w-40
                    origin-bottom rounded-md
                    border border-zinc-200 dark:border-zinc-800
                    bg-white dark:bg-background
                    justify-self-center
                    shadow-lg z-50
                    transition-all duration-200 ease-out
                    overflow-hidden
                    ${
                        isOpen
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
                            : "opacity-0 scale-90 translate-y-2 pointer-events-none invisible"
                    }
                `}
            >
                {locales.map((locale) => (
                    <Link
                        key={locale}
                        href={getLanguagePath(locale)}
                        scroll={false}
                        tabIndex={isOpen ? 0 : -1}
                        aria-current={
                            currentLocale === locale ? "page" : undefined
                        }
						onClick={() => {
							flushSync(() => {
								setIsOpen(false);

								if (locale !== currentLocale) {
									onBeforeLanguageChange?.();
								}
							});
                        }}
                        className={`
                            flex items-center justify-between gap-2
                            w-full px-3 py-1.5
                            text-left text-sm
                            transition-colors
                            font-lexendgiga tracking-[-0.1em]
                            ${
                                currentLocale === locale
                                    ? "bg-zinc-200 dark:bg-[#3f3d66] text-zinc-950 dark:text-white font-medium"
                                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                            }
                        `}
                    >
                        <span>{languageNames[locale]}</span>

                        <span className="ml-auto text-zinc-500">
                            ({locale})
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}