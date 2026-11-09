import singleCover from "@/../public/Images/jackets/another2026.webp";
import compilationCover from "@/../public/Images/jackets/sixis3rd.webp";
import DiscographyInfo from "@/components/DiscographyInfo";
import { isLocale } from "@/i18n/config";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getDictionary } from "@/i18n/dict";

export const metadata: Metadata = {
    title: "Lesitia. / Discography",
    description: 'Official website of a composer "Lesitia."',
};

interface Release {
    title: string;
    date: string;
    cover: StaticImageData;
}

const recentSingles: Release = {
	title: "Another (2026) Years",
	date: "2026. 01. 01",
	cover: singleCover,
};

const recentCompilations: Release = {
	title: "Secret Submission",
	date: "2023. 12. 30",
	cover: compilationCover,
};

interface PageProps {
    params: Promise<{
        lang: string;
    }>;
}

export default async function RootPage({ params }: PageProps) {
	const { lang } = await params;

	if (!isLocale(lang)) {
		notFound();
	}

	const t = getDictionary(lang);

    return (
        <div className="flex flex-row flex-1 font-sans items-start text-(--primary-foreground) transition-colors duration-200 ease-out">

            {/* Header */}
            <div className="fixed top-0 w-full h-[70px] z-[100] flex items-center justify-center">
                <span className="font-lexendgiga font-semibold leading-10 tracking-[-0.15em] text-primary-foreground text-2xl">
                    Discography
                </span>
            </div>

            <div className="flex flex-col pt-[70px] w-full min-h-screen font-lexendgiga">

                {/* Total Discography */}
				<DiscographyInfo lang={lang} />
                {/* Recent Releases */}
                <div className="flex flex-col lg:flex-row place-content-center items-center px-[5vw] lg:px-[10vw] py-[30px] w-full h-auto gap-[30px] transition-all duration-200 ease-out">

					{/* Latest Singles */}
					<div className="flex flex-col items-center justify-start w-[450px] min-w-[450px] min-h-[500px] p-[20px] bg-black/10 dark:bg-[#3f3d66]/50 rounded-[25px] transition-all duration-200 ease-out">
						<div className="flex flex-col items-center justify-start min-w-[400px]">
							<p className="font-[800] text-2xl md:text-3xl text-center">
								Latest Single
							</p>

							<p className="font-pretendard font-[600] text-sm opacity-60 mb-5">
								{t.discography.latestSingle}
							</p>

							<div className="flex flex-col items-center w-full gap-3">
								<div className="relative w-full max-w-[280px] aspect-square overflow-hidden ">
									<Image
										src={recentSingles.cover}
										alt={recentSingles.title}
										fill
										className="object-cover"
										sizes="280px"
										loading="eager"
									/>
								</div>

								<div className="flex flex-col items-center w-full">
									<p className="font-lexend font-[700] text-lg text-center gap-3">
										{recentSingles.title}
									</p>

									<p className="font-lexend text-sm opacity-60">
										{recentSingles.date}
									</p>
								</div>
							</div>
						</div>
						<div className="flex min-h-[40px]" />

						<Link href={`/${lang}/discography/single`}>
							<button
								type="submit"
								className="font-lexendgiga inline-block px-4 py-2 rounded-md bg-(--primary) hover:bg-(--primary-foreground) text:bg-(--primary-foreground) hover:text-(--primary) tracking-[-0.1em] font-[600] transition-all duration-200 ease-out"
							>	
								See all singles...
							</button>
						</Link>
					</div>

					{/* Latest Compilations */}
					<div className="flex flex-col items-center justify-start w-[450px] min-w-[450px] min-h-[500px] p-[20px] bg-black/10 dark:bg-[#3f3d66]/50 rounded-[25px] transition-all duration-200 ease-out">
						<div className="flex flex-col items-center justify-start min-w-[400px]">
							<p className="font-[800] text-2xl md:text-3xl text-center">
								Latest Compilation
							</p>

							<p className="font-pretendard font-[600] text-sm opacity-60 mb-5">
								{t.discography.latestCompilation}
							</p>

							<div className="flex flex-col items-center w-full gap-3">
								<div className="relative w-full max-w-[280px] aspect-square overflow-hidden ">
									<Image
										src={recentCompilations.cover}
										alt={recentCompilations.title}
										fill
										className="object-cover"
										sizes="280px"
										loading="eager"
									/>
								</div>

								<div className="flex flex-col items-center w-full">
									<p className="font-lexend font-[700] text-lg text-center gap-3">
										{recentCompilations.title}
									</p>

									<p className="font-lexend text-sm opacity-60">
										{recentCompilations.date}
									</p>
								</div>
							</div>
						</div>
						<div className="flex min-h-[40px]" />
						<Link href={`/${lang}/discography/compilation`}>
							<button
								type="submit"
								className="font-lexendgiga inline-block px-4 py-2 rounded-md bg-(--primary) hover:bg-(--primary-foreground) text:bg-(--primary-foreground) hover:text-(--primary) tracking-[-0.1em] font-[600] transition-all duration-200 ease-out"
							>	
								See all compilations...
							</button>
						</Link>
					</div>
				</div>
				
                <p className="mt-auto w-full font-lexendgiga font-[700] text-right tracking-[-0.1em] p-[10px]">
                    © 2020~ Lesitia. / All rights reserved.
                </p>
            </div>
        </div>
    );
}
