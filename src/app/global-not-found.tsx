import Logo from "@/../public/Images/Logo.png";
import Image from "next/image";
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
	src: '../../public/fonts/pretendard/PretendardVariable.woff2', // 경로 지정
	display: 'swap',
	weight: '45 930',
	variable: '--font-pretendard',
});

export default function GlobalNotFound() {

	return (
		<html
		lang="ko"
		className={`${pretendard.variable} flex h-screen items-center justify-center antialiased bg-zinc-300 dark:bg-[#1f1e33]`}>
			<body className={`${pretendard.className}`}>
				<div className="min-h-full flex flex-col bg-zinc-300 dark:bg-[#1f1e33]">
					<div className="flex flex-col flex-1 items-center justify-center font-sans">
						<div className="flex flex-col items-center justify-center gap-10 text-center">
							<Image
								className="h-[60px] w-[60px]"
								src={Logo}
								alt="Next.js logo"
								width={80}
								height={80}
								priority
							/>
							<h1 className="text-7xl font-[900] leading-4 tracking-tight text-[#1f1e33] dark:text-[#e0e1cc]">
								404
							</h1>
							<p className="text-3xl font-semibold leading-4 tracking-tight text-[#1f1e33] dark:text-[#e0e1cc]">
								Page Not Found.
							</p>
							<p>

								
							</p>
							<Link 
								href="/" 
								prefetch={false}
								className="inline-block px-4 py-2 bg-[#3f3d66] dark:bg-[#7f7bbb] text-white rounded-md hover:bg-[#1f1e33] dark:hover:bg-[#3f3d66]"
							>
							Return to Main page
							</Link>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
