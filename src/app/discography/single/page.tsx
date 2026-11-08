import lastmemories from "@/../public/Images/jackets/lastmemories.webp";
import another2026 from "@/../public/Images/jackets/another2026.webp";
import AlbumList from "@/styles/components/AlbumList";
import { Metadata } from "next";
import DiscographyInfo from "@/styles/components/DiscographyInfo";

export const metadata: Metadata = {
	title: "Lesitia. / Singles",
	description: "Official website of a composer \"Lesitia.\"",
};

export default function RootPage() {
	return (
		<div className="flex flex-row flex-1 font-lexendgiga items-start text-(--primary-foreground) transition-color duration-200 ease-out">
			<div className="absolute fixed w-full h-[70px] z-100 flex flex-row flex-1 items-center justify-center">
				<span className="font-lexendgiga font-semibold leading-10 tracking-[-0.1em] text-primary-foreground text-2xl tracking-[-0.15em]">
					Discography - Singles
				</span>
			</div>
			<div className="flex flex-col pt-[70px] w-full min-h-[100vh]">
				{/* Total Discography */}
				<DiscographyInfo/>
				<AlbumList
					src={lastmemories}
					index={1}
					title="Last Memories"
					songList={
						[
							{ songName: "Last Memories", composerName: "Lesitia. vs MGG"},
						]
					}
				/>
				<AlbumList
					src={another2026}
					index={2}
					title="Another (2026) Years"
					songList={
						[
							{ songName: "Another (2026) Years", composerName: "Lesitia."},
						]
					}
				/>
				<p className="mt-auto bottom-0 left-0 w-full h-40 font-lexendgiga font-[700] h-full text-right tracking-[-0.1em] p-[10px]">© 2020~ Lesitia. / All rights reserved.</p>
			</div>
		</div>
	);
}