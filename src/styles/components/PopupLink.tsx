import Link from 'next/link';
import { ReactNode } from 'react';
import type { UrlObject } from 'url';

type Url = string | UrlObject;
type OnNavigateEventHandler = (event: {
    preventDefault: () => void;
}) => void;

interface PopupLinkProps {
    className?: string;
    href: Url;
    as?: Url;
    /** @defaultValue 'false' */
    replace?: boolean;
    /** @defaultValue 'false' */
    scroll?: boolean;
    /** @defaultValue 'false' */
    shallow?: boolean;
    /** @defaultValue 'false' */
    passHref?: boolean;
    /** @defaultValue 'false' */
    prefetch?: boolean | 'auto' | null;
    locale?: string | false;
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
    onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    onNavigate?: OnNavigateEventHandler;
    transitionTypes?: string[];
    /** 팝업 배경색을 Tailwind CSS 클래스로 지정합니다. */
    popupStyle?: string;
    /** 팝업 화살표 테두리 색상을 Tailwind CSS 클래스로 지정합니다. */
    popupBorderStyle?: string;
    /** @defaultValue 'false' */
    isPopupBelow?: boolean;
    target?: string;
    rel?: string;
    children?: ReactNode;
    popupText?: ReactNode;
}

export default function PopupLink({
    className,
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref = false,
    prefetch = false,
    locale,
    onMouseEnter,
    onTouchStart,
    onClick,
    onNavigate,
    transitionTypes,
    popupStyle = 'bg-zinc-200 dark:bg-[#3f3d66]',
    popupBorderStyle,
	isPopupBelow = false,
    target,
    rel,
    children,
    popupText: popupChildren,
}: PopupLinkProps) {
    // 별도 화살표 색상이 없으면 팝업 배경색에서 색상을 가져옵니다.
    const arrowColorClass = popupBorderStyle ??
        (isPopupBelow
            ? 'border-b-zinc-200 dark:border-b-[#3f3d66]'
            : 'border-t-zinc-200 dark:border-t-[#3f3d66]');

    return (
        <div className="relative inline-block group">
            <Link
                className={className}
                href={href}
                as={as}
                replace={replace}
                scroll={scroll}
                shallow={shallow}
                passHref={passHref}
                prefetch={prefetch}
                locale={locale}
                onMouseEnter={onMouseEnter}
                onTouchStart={onTouchStart}
                onClick={onClick}
                onNavigate={onNavigate}
				transitionTypes={transitionTypes}
				target={target}
				rel={rel}
            >
                {children}
            </Link>

            {/* Description Popup */}
            <div
                className={`absolute ${isPopupBelow ? 'top-full mt-3' : 'bottom-full mb-3'} left-1/2 -translate-x-1/2 w-48 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 text-center ${popupStyle}`}
			>
				{popupChildren}
				<div
					aria-hidden="true"
                    className={`absolute ${isPopupBelow ? 'bottom-full border-b-4' : 'top-full border-t-4'} left-1/2 -translate-x-1/2 ${arrowColorClass}`}
                    style={{
                        // CSS border 삼각형: 좌우 테두리는 항상 투명하게 고정합니다.
                        width: 0,
                        height: 0,
                        boxSizing: 'content-box',
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        ...(isPopupBelow
                            ? { borderTop: '0 solid transparent', borderBottomStyle: 'solid', borderBottomWidth: '6px' }
                            : { borderBottom: '0 solid transparent', borderTopStyle: 'solid', borderTopWidth: '6px' }),
                    }}
                />
            </div>
        </div>
    );
}
