import Logo from "@/../public/Images/Logo.webp";
import Image from "next/image";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/styles/components/ThemeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "404 / Page Not Found",
	description: "There's nothing.",
};

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

export default function GlobalNotFound() {	
	return (
		<html
			lang="ko"
			className={`${lexendgiga.variable} ${pretendard.variable} flex h-screen items-center justify-center antialiased bg-background transition-color duration-200 ease-out`}
			suppressHydrationWarning
		>
			<body className="bg-inherit">
				<ThemeProvider>
					<div className="min-h-full flex flex-col bg-background text-(--primary-foreground) transition-color duration-200 ease-out">
						<div className="flex flex-col flex-1 items-center justify-center font-sans">
							<div className="flex flex-col items-center justify-center gap-10 text-center">
								<Image
									className="h-[60px] w-[60px]"
									src={Logo}
									alt="logo"
									width={80}
									height={80}
									priority
								/>
								<h1 className={`font-pretendard text-7xl font-[900] leading-4 tracking-tight`}>
									404
								</h1>
								<p className={`font-lexendgiga text-3xl font-semibold leading-4 tracking-tight`}>
									Page Not Found.
								</p>
								<br/>
								<form action="/" method="get">
									<button
										type="submit"
										className="font-lexendgiga inline-block px-4 py-2 bg-[#3f3d66] rounded-md hover:bg-[#1f1e33] tracking-[-0.1em] font-[600]"
									>
										Return to Main page
									</button>
								</form>
							</div>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
