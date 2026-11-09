
"use client";

import { ThemeDropdown } from "@/components/ThemeDropDown";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    ChevronDown,
    Disc3,
    DiscAlbum,
    Home,
    Library,
	Menu,
	ScrollText,
    X,
} from "lucide-react";

import {
    defaultLocale,
    isLocale,
    type Locale,
} from "@/i18n/config";

import type { ElementType, ReactNode } from "react";
import LanguageSwitcher from "../LanguageSwitcher";

interface MenuItem {
    title: string;
    href?: string;
    icon?: ElementType;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
	{
		title: "Main page",
		href: "/",
		icon: Home,
	},
	{
		title: "Discography",
		href: "/discography",
		icon: Library,
		children: [
			{
				title: "Singles",
				href: "/discography/single",
				icon: Disc3,
			},
			{
				title: "Compilations",
				href: "/discography/compilation",
				icon: DiscAlbum,
			},
		],
	},
	{
		title: "Guidelines",
		href: "/guideline",
		icon: ScrollText,
	}
];

export default function Sidebar() {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    // 현재 URL에서 언어 추출
    const segments = pathname.split("/").filter(Boolean);

    const currentLocale: Locale =
        segments.length > 0 && isLocale(segments[0])
            ? segments[0]
            : defaultLocale;

    // 경로의 마지막 슬래시 제거
    const normalizePath = (path: string) => {
        if (path === "/") return "/";
        return path.replace(/\/+$/, "");
    };

    // 현재 언어에 맞는 URL 생성
    const getLocalizedHref = (href: string) => {
        const normalizedHref = normalizePath(href);

        if (normalizedHref === "/") {
            return `/${currentLocale}/`;
        }

        return `/${currentLocale}${normalizedHref}`;
    };

    // 현재 페이지 활성화 확인
    const isActive = (href: string) => {
        const localizedHref = normalizePath(getLocalizedHref(href));
        const currentPath = normalizePath(pathname);

        return (
            currentPath === localizedHref ||
            (
                localizedHref !== `/${currentLocale}` &&
                currentPath.startsWith(`${localizedHref}/`)
            )
        );
    };

    // 현재 경로가 해당 메뉴 또는 하위 메뉴에 포함되는지 확인
    const hasActivePath = (item: MenuItem): boolean => {
        if (item.href && isActive(item.href)) return true;

        return item.children?.some(hasActivePath) ?? false;
    };

    // 재귀적으로 메뉴 렌더링
    const renderMenuItem = (
        item: MenuItem,
        key: string,
        depth: number
    ): ReactNode => {
        const Icon = item.icon;

        const hasChildren = Boolean(item.children?.length);

        const active = hasActivePath(item);

        const expanded = openMenus[key] ?? hasChildren;

        const submenuId = `sidebar-submenu-${key}`;

        const currentDepth = Math.max(0, Math.min(depth, 5));

        const activeTextSize = 16 - 1.6 * currentDepth;

        const textSize = 12 - 1.2 * currentDepth;

        const itemClassName = `
            flex min-w-0 items-center gap-3 rounded-lg
            px-3 transition-all duration-200 font-lexendgiga
            ${
                active
                    ? `bg-white dark:bg-[#3f3d66] text-blue-400 font-[600] tracking-[-0.05em]`
                    : `text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 hover:text-[#1f1e33] font-[300] dark:hover:text-white`
            }
        `;

        const itemStyle = {
            marginLeft: `${currentDepth * 16}px`,
            width: `calc(100% - ${currentDepth * 16}px)`,
            height: `${44 * 0.8 ** currentDepth}px`,
            fontSize: `${Math.max(active ? activeTextSize : textSize)}px`,
        };

        const toggleSubmenu = () => {
            setOpenMenus((previous) => ({
                ...previous,
                [key]: !expanded,
            }));
        };

        // 현재 언어를 적용한 메뉴 URL
        const localizedHref = item.href
            ? getLocalizedHref(item.href)
            : undefined;

        return (
            <div key={key} className="space-y-1">

                {hasChildren ? (
                    <div className="flex min-w-0 items-center gap-1">

                        {localizedHref ? (
                            <>
                                <Link
                                    href={localizedHref}
                                    className={`${itemClassName} flex-1`}
                                    style={itemStyle}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {Icon && (
                                        <Icon size={20} className="shrink-0" />
                                    )}

                                    <span className="line-clamp-1 place-self-center">
                                        {item.title}
                                    </span>
                                </Link>

                                <button
                                    type="button"
                                    onClick={toggleSubmenu}
                                    aria-label={`${item.title} 서브메뉴 ${expanded ? "접기" : "펼치기"}`}
                                    aria-expanded={expanded}
                                    aria-controls={submenuId}
                                    className="flex h-[44px] w-[40px] shrink-0 items-center justify-center rounded-lg text-gray-700 transition-all hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform duration-200 ${
                                            expanded ? "rotate-180" : "rotate-0"
                                        }`}
                                    />
                                </button>
                            </>
                        ) : (
                            <button
                                type="button"
                                onClick={toggleSubmenu}
                                aria-expanded={expanded}
                                aria-controls={submenuId}
                                className={`${itemClassName} w-full justify-between text-left`}
                                style={itemStyle}
                            >
                                <span className="flex min-w-0 items-center gap-3">
                                    {Icon && (
                                        <Icon size={20} className="shrink-0" />
                                    )}

                                    <span className="line-clamp-1">
                                        {item.title}
                                    </span>
                                </span>

                                <ChevronDown
                                    size={18}
                                    className={`shrink-0 transition-transform duration-200 ${
                                        expanded ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </button>
                        )}

                    </div>
                ) : localizedHref ? (
                    <Link
                        href={localizedHref}
                        className={itemClassName}
                        style={itemStyle}
                        onClick={() => setIsOpen(false)}
                    >
                        {Icon && (
                            <Icon size={20} className="shrink-0" />
                        )}

                        <span className="line-clamp-1">
                            {item.title}
                        </span>
                    </Link>
                ) : (
                    <div className={itemClassName} style={itemStyle}>
                        {Icon && (
                            <Icon size={20} className="shrink-0" />
                        )}

                        <span className="line-clamp-1">
                            {item.title}
                        </span>
                    </div>
                )}

                {/* Submenu */}
                {hasChildren && (
                    <div
                        id={submenuId}
                        aria-hidden={!expanded}
                        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                            expanded
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <div className="space-y-1">
                                {item.children!.map((child, index) =>
                                    renderMenuItem(
                                        child,
                                        `${key}-${index}`,
                                        depth + 1
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        );
    };

    return (
        <div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed left-0 top-[70px] z-50 h-[calc(100dvh-70px)] w-64
                    bg-[#7ebeee] dark:bg-[#1f1e33]
                    overflow-hidden
					transition-[width,transform] duration-200 ease-in-out
					will-change-[width,transform]
                    ${
                        isOpen
                            ? "shadow-[10px_0_15px_-3px_rgba(0,0,0,0.7)] translate-x-0 md:w-64"
                            : "shadow-[0px_0_px_-3px_rgba(0,0,0,0.7)] -translate-x-full md:translate-x-0 md:w-0 md:border-r-0"
                    }
                `}
            >
                <div className="flex h-full flex-col">

                    {/* Toggle Button */}
                    <div className="flex items-center justify-between px-[12px] py-[10px] gap-[10px]">

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close sidebar"
                            className="rounded-lg min-w-[44px] text-[#e0e1cc] text-gray-700 transition-all hover:bg-gray-100 dark:border-[#0f0e19] dark:text-[#e0e1cc] dark:hover:bg-[#3f3d66] w-[44px] h-[44px] items-center justify-center"
                        >
                            <X className="place-self-center" size={30} />
                        </button>

                        <ThemeDropdown />

                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-3 overflow-y-auto overflow-x-hidden hide-scrollbar px-3 py-0">
                        {menuItems.map((item, index) =>
                            renderMenuItem(item, `${index}`, 0)
                        )}
                    </nav>

					{/* Bottom Settings */}
					<div className="shrink-0 w-full px-[12px] py-[10px]">
						<LanguageSwitcher onBeforeLanguageChange={() => {
							setIsOpen(false);
						}}/>
					</div>

				</div>
            </aside>

            {/* Hamburger Button */}
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={`
                    flex fixed left-[12px] top-[80px] z-50
                    rounded-lg
                    p-2.5 bg-[#7ebeee] text-gray-700
                    dark:bg-[#3f3d66] dark:text-[#e0e1cc] dark:hover:bg-[#2f2d4c]
                    w-[44px] h-[44px] items-center justify-center
                    transition-all duration-200 ease-out
                    transform-gpu
                    ${
                        isOpen
                            ? "opacity-0 scale-40 -translate-x-0 pointer-events-none"
                            : "opacity-100 scale-100 hover:scale-90 translate-x-0 pointer-events-auto"
                    }
                `}
                aria-label="Open sidebar"
                aria-hidden={isOpen}
                tabIndex={isOpen ? -1 : 0}
            >
                <Menu className="self-center" size={24} />
			</button>
        </div>
    );
}
