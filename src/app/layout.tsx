import Image from "next/image";
import Logo from "@/../public/Images/Logo.webp"
import "./globals.css";

import localFont from 'next/font/local';
import Sidebar from "@/styles/components/layout/Sidebar";
import { ThemeProvider } from "@/styles/components/ThemeProvider";

const pretendard = localFont({
	src: '../../public/fonts/pretendard/PretendardVariable.woff2', // 경로 지정
	display: 'swap',
	weight: '45 930',
	variable: '--font-pretendard',
});

const lexendgiga = localFont({
	src: '../../public/fonts/lexendgiga/LexendGiga-VariableFont_wght.woff2', // 경로 지정
	display: 'swap',
	weight: '100 900',
	variable: '--font-lexendgiga',
});

const lexend = localFont({
	src: '../../public/fonts/lexend/Lexend-VariableFont_wght.woff2', // 경로 지정
	display: 'swap',
	weight: '100 900',
	variable: '--font-lexend',
});

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${lexendgiga.variable} ${lexend.variable} ${pretendard.variable} h-full antialiased`} suppressHydrationWarning>
			<head></head>
			<body className={`${pretendard.className} "min-h-full flex flex-col`}>
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
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
