import ImageOverlay from "@/styles/components/ImageOverlay";
import background from "@/../public/Images/bg.png"
import discordLogo from "@/../public/Images/discord-white-icon.svg"
import ytLogo from "@/../public/Images/yt_icon_white_digital.png"
import Link from "next/link";
import Image from "next/image";
import NativePopupLink from "@/styles/components/PopupLink";
import PopupLink from "@/styles/components/PopupLink";

export default function RootPage() {
	return (
		<div className="flex flex-row flex-1 bg-zinc-300 font-sans items-start">
			<div className="absolute fixed w-full h-[70px] z-100 flex flex-row flex-1 items-center justify-center">
				<h1 className="font-semibold leading-10 tracking-tight text-[#1f1e33] dark:text-[#e0e1cc] text-3xl">
					Main page
				</h1>
			</div>
			<div className="flex flex-col pt-[70px] w-full items-center justify-center dark:bg-[#0f0e17]">
				<ImageOverlay
					src={background}
					alt=""
					title="Lesitia."
					subtitle="// Composer that has filled with chaotic mind. //"
					textStyle="text-[#e0e1cc] text-7xl font-semibold italic"
					subTextStyle="text-[#e0e1cc] text-xl font-regular italic"
					overlayColor="bg-black/70"
				>
					<br />
					<div className="flex flex-row gap-[15px]">
				
						<PopupLink
							href="https://www.youtube.com/c/Lesitia"
							isPopupBelow={true}
							popupText="Youtube"
							popupTextStyle="font-semibold italic text-[#1f1e33] dark:text-[#e0e1cc]"
							popupBorderStyle="border-zinc-200 dark:border-[#3f3d66]"
						>
							<button className="
							relative flex flex-row items-center overflow-hidden px-1 py-1 font-medium text-white bg-slate-900 rounded-[25px]
							w-[50px] h-[50px]
							shadow-md transition-all duration-200 ease-in-out
							items-center justify-center

							hover:bg-[#ff0033] hover:scale-[1.03] hover:shadow-lg

							active:scale-[0.98] active:bg-slate-950
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
							isPopupBelow={true}
							popupText={`"Lesitia's Celestial" Discord server`}
							popupTextStyle="font-semibold italic text-[#1f1e33] dark:text-[#e0e1cc]"
							popupBorderStyle="border-zinc-200 dark:border-[#3f3d66]"

							href="https://discord.gg/gYj88tX5q9"
						>
							<button className="
							relative flex flex-row items-center overflow-hidden px-1 py-1 font-medium text-white bg-slate-900 rounded-[25px]
							w-[50px] h-[50px]
							shadow-md transition-all duration-200 ease-in-out
							items-center justify-center

							hover:bg-[#5865f2] hover:scale-[1.03] hover:shadow-lg

							active:scale-[0.98] active:bg-slate-950
							">
								<Image
									src={discordLogo}
									alt=""
									width={30}
									height={30}
								>
									
								</Image>
							</button>
						</PopupLink>
					</div>
				</ImageOverlay>

				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>a</p>
				<p>© 2026~ Lesitia. / All rights reserved.</p>
				
			</div>
		</div>
	);
}
