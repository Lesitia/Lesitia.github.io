
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Home,
	Disc3,
	Menu,
	X,
} from "lucide-react";

interface MenuItem {
	title: string;
	href: string;
	icon: React.ElementType;
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
		icon: Disc3,
	},
];

export default function Sidebar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const isActive = (href: string) => {
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	return (
		<>
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
					fixed left-0 top-[70px] z-50 h-screen w-64
					bg-[#7ebeee] dark:bg-[#1f1e33] 
					overflow-hidden
					transition-all duration-175 ease-in-out
					will-change-transform
					${
						isOpen
							? "shadow-[10px_0_15px_-3px_rgba(0,0,0,0.7)] translate-x-0 md:w-64 "
							: "shadow-[0px_0_px_-3px_rgba(0,0,0,0.7)] -translate-x-full md:translate-x-0 md:w-0 md:border-r-0"
					}
				`}
			>
				<div className="flex h-full flex-col">

					{/* Toggle Button */}
					<div className="flex items-center px-[10px] py-[10px]">
						<button
							onClick={() => setIsOpen(false)}
							aria-label="Close sidebar"
							className={`
								rounded-lg p-2 text-[#e0e1cc] hover:bg-[#3f3d66]

								transition-all
								`}
						>
							<X size={30} />
						</button>
					</div>

					{/* Navigation */}
					<nav className="flex-1 px-3 py-0 space-y-3">
						{menuItems.map((item) => {
							const Icon = item.icon;
							const active = isActive(item.href);

							return (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setIsOpen(false)}
									className={`
										flex items-center gap-3 rounded-lg
										px-3 py-3 text-sm font-medium
										transition-colors
										${
											active
												? "bg-white dark:bg-[#3f3d66] text-blue-400"
												: "text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 hover:text-[#1f1e33] dark:hover:text-white"
										}
									`}
								>
									<Icon size={20} />
									<span className="line-clamp-1">{item.title}</span>
								</Link>
							);
						})}
					</nav>
				</div>
			</aside>
			{/* Hamburger Button */}
			<button
				onClick={() => setIsOpen(true)}
				className={`
					fixed left-[10px] top-[80px] z-50
					rounded-lg border border-gray-200
					bg-white p-2.5 text-gray-700 hover:bg-gray-100
					dark:bg-[#1f1e33] dark:border-[#0f0e19] dark:text-[#e0e1cc] dark:hover:bg-[#3f3d66]

					transition-all duration-175 ease-in-out
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
				<Menu size={24} />
			</button>
		</>
	);
}
