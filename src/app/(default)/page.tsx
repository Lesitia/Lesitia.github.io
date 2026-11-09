import LanguageRedirect from "@/components/LanguageRedirect";


import "@/app/globals.css";
import Image from "next/image";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Metadata } from "next";
import { Logo } from "@/assets";

export const metadata: Metadata = {
	title: "Loading...",
	description: "There's nothing.",
};

export default function Home() {	
	return (
		<ThemeProvider>
			<div className="w-[100vw] h-[100vh] min-h-full flex flex-col bg-background text-(--primary-foreground) transition-color duration-200 ease-out">
					<div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center justify-self-center gap-10 text-center">
						<Image
							className="h-[60px] w-[60px]"
							src={Logo}
							alt="logo"
							width={80}
							height={80}
							priority
						/>
						<h1 className={`font-lexendgiga text-7xl font-[900] leading-4 tracking-tight`}>
							Loading...
						</h1>
						<p className={`font-lexendgiga text-3xl font-semibold leading-4 tracking-tight`}>
							Wait a second...
					</p>
					<LanguageRedirect/>
					</div>
			</div>
		</ThemeProvider>
	);
}