
import Image from "next/image";
import Logo from "@/../public/Images/Logo.png"
import "./globals.css";

import localFont from 'next/font/local';
import Sidebar from "@/styles/components/layout/Sidebar";
import { Metadata } from "next";

const pretendard = localFont({
	src: '../../public/fonts/pretendard/PretendardVariable.woff2', // 경로 지정
	display: 'swap',
	weight: '45 930',
	variable: '--font-pretendard',
});

export const metadata: Metadata = {
	title: "Lesitia.",
	description: "Official website of a composer \"Lesitia.\"",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${pretendard.variable} h-full antialiased`}>
			<body className={`${pretendard.className} "min-h-full flex flex-col`}>
				<div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black">
					<Sidebar></Sidebar>
					<div className="fixed top-0 flex flex-row w-full h-[70px] z-100 px-[10px] py-[10px] bg-[#7ebeee] dark:bg-[#0f1733] items-center justify-between overflow-visible shadow-md/70">
						<Image
						className="dark:invert w-[50px] h-[50px]"
						src={Logo}
						alt="Next.js logo"
						width={100}
						height={20}
						priority
						/>
					</div>
					{children}
					{placeholder}
				</div>
			</body>
		</html>
	);
}
