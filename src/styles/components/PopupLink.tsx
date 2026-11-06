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
	popupStyle?: string;
	popupBorderStyle?: string;
	popupText?: string;
	popupTextStyle?: string;
	/** @defaultValue 'false' */
	isPopupBelow?: boolean
	children?: ReactNode;
}

export default function PopupLink(
	{ 
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
		popupStyle = "bg-zinc-200 dark:bg-[#3f3d66]",
		popupBorderStyle = "",
		popupText,
		popupTextStyle = "text-[#1f1e33] dark:text-[#e0e1cc]",
		isPopupBelow,
		children
	}: PopupLinkProps) {
	
	if (popupBorderStyle === "")
	{
		if (isPopupBelow === true)
		{
			popupBorderStyle = popupStyle.replaceAll("bg-", "border-b-")
		}
		else
		{
			popupBorderStyle = popupStyle.replaceAll("bg-", "border-t-")
		}
	}
	else
	{
		if (isPopupBelow === true)
		{
			popupBorderStyle = popupBorderStyle.replaceAll("border-", "border-b-")
		}
		else
		{
			popupBorderStyle = popupBorderStyle.replaceAll("border-", "border-t-")
		}
	}
	
	return (
		<div className="relative inline-block group">
			{/* The Next.js Link */}
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
			>
				{children}
			</Link>

			{/* The Description Popup */}
			<div className={`absolute ${isPopupBelow ? "top-full mt-3" : "bottom-full mb-3"} left-1/2 -translate-x-1/2 w-48 p-2 
							opacity-0 group-hover:opacity-100 transition-opacity duration-175 
							pointer-events-none z-10 text-center ${popupStyle}`}>
				<h1 className={`${popupTextStyle}`}>{popupText}</h1>
				{/* Little triangle arrow at the bottom */}
				<div className={`absolute ${isPopupBelow ? "bottom-full" : "top-full"} left-1/2 -translate-x-1/2 border-4 border-transparent ${popupBorderStyle}`}/>
			</div>
		</div>
	);
}
