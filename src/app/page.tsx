import ImageOverlay from "@/styles/components/ImageOverlay";
import background from "@/../public/Images/bg.webp"
import discordLogo from "@/../public/Images/discord-white-icon.svg"
import ytLogo from "@/../public/Images/yt_icon_white_digital.webp"
import Image from "next/image";
import PopupLink from "@/styles/components/PopupLink";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lesitia. / Main",
	description: "Official website of a composer \"Lesitia.\"",
};

export default function RootPage() {
	return (
		<div className="flex flex-row flex-1 font-sans items-start text-(--primary-foreground) transition-color duration-200 ease-out">
			<div className="absolute fixed w-full h-[70px] z-100 flex flex-row flex-1 items-center justify-center">
				<span className="font-lexendgiga font-semibold leading-10 tracking-[-0.1em] text-primary-foreground text-2xl tracking-[-0.15em]">
					Main page
				</span>
			</div>
			<div className="flex flex-col pt-[70px] w-full min-h-[100vh]">
				<ImageOverlay
					src={background}
					alt=""
					title="Lesitia."
					subtitle="// Composer that has filled with chaotic mind. //"
					textStyle="text-[#e0e1cc] text-7xl font-semibold italic font-lexendgiga tracking-[-0.1em]"
					subTextStyle="text-[#e0e1cc] text-xl font-regular italic font-lexendgiga tracking-[-0.125em]"
					overlayColor="bg-[#000]/70"
				>
					<br />
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
									YouTube
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
									src={ytLogo}
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
										{"\"Lesitia's Celestial\""}
									</h1>
									<p className="font-lexendgiga tracking-[-0.125em] font-semibold italic text-(--primary-foreground) text-sm">
										Discord server
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
									src={discordLogo}
									alt=""
									width={30}
								>
								</Image>
							</button>
						</PopupLink>
					</div>
				</ImageOverlay>
				<div className="flex flex-col place-content-center items-center px-[120px] py-[10px] justify-center w-full h-full">
					<p className=" font-pretendard font-[700] text-2xl">
						이 사이트는 <i className="font-lexendgiga font-[500] tracking-[-0.1em]">{"\"Lesitia.\""}</i> 의 공식 사이트입니다.
					</p>
					<p className="font-pretendard font-[600]">
						이곳에서 저의 곡에 대한 정보를 확인할 수 있습니다.
					</p>
				</div>
				<div className="flex flex-col place-content-center px-[20vw] py-[30px] justify-center bg-black/10 dark:bg-[#3f3d66]/50 w-full h-[300px]">
					<p className="font-lexendgiga font-[700] text-4xl italic tracking-[-0.1em] leading-[1.5]">
						Bio
					</p>
					<p className="font-pretendard font-[600]">
						안녕하세요, <i className="font-lexendgiga font-[500] tracking-[-0.1em]">{"\"Lesitia.\""}</i> 입니다.<br />
						
					</p>
				</div>
				<p className="mt-auto bottom-0 left-0 w-full h-40 font-lexendgiga font-[700] h-full text-right tracking-[-0.1em] p-[10px]">© 2020~ Lesitia. / All rights reserved.</p>
			</div>
		</div>
	);
}