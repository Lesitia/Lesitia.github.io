import mgg1st from "@/../public/Images/jackets/mgg1st.webp";
import mgg2nd from "@/../public/Images/jackets/mgg2nd.webp";
import sixis1st from "@/../public/Images/jackets/sixis1st.webp";
import sixis3rd from "@/../public/Images/jackets/sixis3rd.webp";
import AlbumList from "@/styles/components/AlbumList";
import DiscographyInfo from "@/styles/components/DiscographyInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lesitia. / Compilations",
	description: "Official website of a composer \"Lesitia.\"",
};

export default function RootPage() {
	return (
		<div className="flex flex-row flex-1 font-lexendgiga items-start text-(--primary-foreground) transition-color duration-200 ease-out">
			<div className="absolute fixed w-full h-[70px] z-100 flex flex-row flex-1 items-center justify-center">
				<span className="font-lexendgiga font-semibold leading-10 tracking-[-0.1em] text-primary-foreground text-2xl tracking-[-0.15em]">
					Discography - Compilations
				</span>
			</div>
			
			<div className="flex flex-col pt-[70px] w-full min-h-[100vh] justify-items-center">
				{/* Total Discography */}
				<DiscographyInfo/>
				<AlbumList
					src={mgg1st}
					index={1}
					title="Acropolix Collapxis"
					subtitle="From MGG 1st Compilation"
					songList={
						[
							{ songName: "Salvation", composerName: "백퍼센트"},
							{ songName: "Morr Gesum", composerName: "TBvwv"},
							{ songName: "Oqua Island", composerName: "Lemonade"},
							{ songName: "Dash to Tokyo", composerName: "KiRist"},
							{ songName: "Carotenoid", composerName: "minu"},
							{ songName: "Drop it", composerName: "Hexacube"},
							{ songName: "Apocalypse", composerName: "Aidano"},
							{ songName: "Broken Shuffle", composerName: "MGG"},
							{ songName: "Meltdown", composerName: "Lesitia."},
							{ songName: "Enjoy yourselffff", composerName: "Kurobara"},
						]
					}
				/>
				<AlbumList
					src={sixis1st}
					index={2}
					title="Asteroid Adventure"
					subtitle="From SIXIS 1st Compilation"
					songList={
						[
							{ songName: "Dream of Lily", composerName: "NumbEr07"},
							{ songName: "Star River", composerName: "DMusic"},
							{ songName: "My Little Comet", composerName: "Forle"},
							{ songName: "The future", composerName: "Kamii"},
							{ songName: "Bursting of Emotion", composerName: "Kyanite"},
							{ songName: "Flying Over a Midnight", composerName: "+MA"},
							{ songName: "Eternal Insanity", composerName: "Lesitia."},
							{ songName: "Evening Promise", composerName: "MGG"},
							{ songName: "Last Genesis", composerName: "Hexacube"},
						]
					}
				/>
				<AlbumList
					src={mgg2nd}
					index={3}
					title="Destroyer"
					subtitle="From MGG 2nd Compilation"
					songList={
						[
							{ songName: "Anthropic Overlords", composerName: "816ThreeNumbers"},
							{ songName: "NONSENSE", composerName: "Hexacube"},
							{ songName: "Music Start", composerName: "Aidano"},
							{ songName: "ReSearch", composerName: "MGG"},
							{ songName: "Exceptional // Imperfection", composerName: "Lesitia."},
							{ songName: "Cadere", composerName: "Kyanite"},
							{ songName: "Canaria", composerName: "Kurobara"},
							{ songName: "이세상을구하기위해하드킥3가지를가지고이세계로떠납니다", composerName: "MeawcoalA"},
							{ songName: "Resurrection", composerName: "Kamii, Forle"},
						]
					}
				/>
				<AlbumList
					src={sixis3rd}
					index={4}
					title="Secret Submission"
					subtitle="From SIXIS 3rd Compilation"
					songList={
						[
							{ songName: "The Another Opened World", composerName: "Glancia"},
							{ songName: "Eucalyptus", composerName: "DMusic"},
							{ songName: "月光館", composerName: "plotter"},
							{ songName: "No One Else's Here", composerName: "Ketose"},
							{ songName: "MELTDOWN-4-EVER.", composerName: "Kyanite"},
							{ songName: "life.exe", composerName: "*scent"},
							{ songName: "満開", composerName: "KOTDARI"},
							{ songName: "Cake", composerName: "Kurobara"},
							{ songName: "Take Me Higher", composerName: "Palami"},
							{ songName: "Last War", composerName: "Wison"},
							{ songName: "Feel the World", composerName: "Sato/沙土"},
							{ songName: "The Super Fight", composerName: "CERMIX"},
							{ songName: "3, 2, 1, GO!!!", composerName: "KreScent"},
							{ songName: "Ere long, each dream fades into bygone days...", composerName: "Pyahant"},
							{ songName: "Daydream", composerName: "Aidano"},
							{ songName: "E'zera ve' inf'nit", composerName: "Lesitia."},
							{ songName: "WORLD'S FIRST 16K BASE ROLLING CLEAR", composerName: "zsry"},
							{ songName: "환생했더니악역최종보스가되어최강바이올린과싸우게되었습니다", composerName: "MutecoiN vs. MeawcoalA"},
						]
					}
				/>
				<p className="mt-auto bottom-0 left-0 w-full h-40 font-lexendgiga font-[700] h-full text-right tracking-[-0.1em] p-[10px]">© 2020~ Lesitia. / All rights reserved.</p>
			</div>
		</div>
	);
}