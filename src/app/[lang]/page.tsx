import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lesitia. / Main",
	description: "Official website of a composer \"Lesitia.\"",
};

import Image from "next/image";

import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dict";

import ImageOverlay from "@/components/ImageOverlay";
import PopupLink from "@/components/PopupLink";

import { BG, Logo_youtube, Logo_discord } from "@/assets";
import Link from "next/link";
import { ElapsedTimeCounter } from "@/components/TimeCounters";

interface PageProps {
    params: Promise<{
        lang: string;
    }>;
}

export default async function RootPage({ params }: PageProps) {
    const { lang } = await params;

    if (!isLocale(lang)) {
    return null;
    }

	const t = getDictionary(lang);
	
	return (
		<div className="flex flex-row flex-1 font-sans items-start text-(--primary-foreground) transition-color duration-200 ease-out">
			<div className="absolute fixed w-full h-[70px] z-100 flex flex-row flex-1 items-center justify-center">
				<span className="font-lexendgiga font-semibold leading-10 tracking-[-0.1em] text-primary-foreground text-2xl lg:text-3xl tracking-[-0.15em] transition-text duration-200 ease-out">
					Main page
				</span>
			</div>
			<div className="flex flex-col pt-[70px] w-full min-h-[100vh]">
				<ImageOverlay
					src={BG}
					alt=""
					title="Lesitia."
					subtitle="// Composer that has filled with chaotic mind. //"
					textStyle="text-[#e0e1cc] text-7xl font-semibold italic font-lexendgiga tracking-[-0.1em]"
					subTextStyle="text-[#e0e1cc] text-lg md:text-2xl font-regular italic font-lexendgiga tracking-[-0.15em] sm:tracking-[-0.125em] transition-text duration-200 ease-out"
					overlayColor="bg-[#000]/70"
				>
					<br/>
					<div className="flex flex-row gap-[15px]">
				
						<PopupLink
							className="rounded-[25px]"
							href="https://www.youtube.com/c/Lesitia"
							target="_blank"
							rel="noopener noreferrer"
							isPopupBelow={true}
							popupStyle="bg-(--primary) rounded-[16px]"
							popupBorderStyle="border-(--primary)"
							popupText=
							{
								<h1 className="font-lexendgiga tracking-[-0.125em] font-semibold italic text-(--primary-foreground)">
									{t.main.links.youtube}
								</h1>
							}
						>
							<button className="
							relative flex flex-row items-center overflow-hidden px-1 py-1 font-medium text-white bg-slate-900 rounded-[25px]
							w-[50px] h-[50px]
							shadow-md transition-all duration-200 ease-out
							items-center justify-center

							hover:bg-[#ff0033] hover:scale-[1.05] hover:shadow-lg

							active:scale-[0.9]
							">
								<Image
									src={Logo_youtube}
									alt=""
									width={60}
									height={60}
								>
								</Image>
							</button>
							
						</PopupLink>
						<PopupLink
							className="rounded-[25px]"
							isPopupBelow={true}
							target="_blank"
							rel="noopener noreferrer"
							popupStyle="bg-(--primary) rounded-[16px]"
							popupBorderStyle="border-(--primary)"
							popupText=
							{
								<div>
									<h1 className="font-lexendgiga tracking-[-0.125em] font-semibold italic text-(--primary-foreground)">
										{`"${t.main.links.discordName}"`}
									</h1>
									<p className="font-lexend tracking-[0em] font-semibold italic text-(--primary-foreground) text-sm">
										{t.main.links.discord}
									</p>
								</div>
							}

							href="https://discord.gg/gYj88tX5q9"
						>
							<button className="
							relative flex flex-row items-center overflow-hidden px-1 py-1 font-medium text-white bg-slate-900 rounded-[25px]
							w-[50px] h-[50px]
							shadow-md transition-all duration-200 ease-out
							items-center justify-center

							hover:bg-[#5865f2] hover:scale-[1.05] hover:shadow-lg

							active:scale-[0.9]
							">
								<Image
									src={Logo_discord}
									alt=""
									width={30}
								>
								</Image>
							</button>
						</PopupLink>
					</div>
				</ImageOverlay>
				<div className="flex flex-col place-content-center items-center py-[10px] justify-center w-full h-full">
					<p className="font-language font-[700] text-2xl">
						{t.main.introduction.first} <i className="font-lexendgiga font-[500] tracking-[-0.1em]">{"\"Lesitia.\""}</i> {t.main.introduction.second}
					</p>
					<p className="font-language font-[600]">
						{t.main.introduction.description}
					</p>
				</div>
				<div className="flex flex-col place-content-center px-[30px] md:px-[60px] lg:px-[20vw] py-[30px] justify-center bg-black/10 dark:bg-[#3f3d66]/50 w-full h-fit transition-padding duration-200 lg:duration-0 ease-out">
					<p className="font-lexendgiga font-[700] text-4xl italic tracking-[-0.1em] leading-[1.5]">
						Bio
					</p>
					<p className="font-language font-[600] break-keep">
						{t.main.bio.greeting.prefix} <i className="font-lexendgiga font-[500] tracking-[-0.1em]">{"\"Lesitia.\""}</i> {t.main.bio.greeting.suffix}<br/><br/>
						{t.main.bio.description.line1} ({t.main.bio.description.fromstart.prefix}<ElapsedTimeCounter target="2022-02-20T00:00:00+09:00" format="compact" locale={lang} compactLen={1}/>{t.main.bio.description.fromstart.suffix})<br/>
						{t.main.bio.description.line2}<br/>
						{t.main.bio.description.line3_1} <Link href={`/${lang}/guideline`} className="text-blue-600 dark:text-blue-300 hover:underline">Guideline</Link> {t.main.bio.description.line3_2}<br/>
					</p>
				</div>
				<p className="mt-auto bottom-0 left-0 w-full h-40 font-lexendgiga font-[700] h-full text-right tracking-[-0.1em] p-[10px]">© 2020~ Lesitia. / All rights reserved.</p>
			</div>
		</div>
	);
}