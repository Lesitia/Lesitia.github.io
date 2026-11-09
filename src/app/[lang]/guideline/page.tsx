import { isLocale } from "@/i18n/config";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getDictionary } from "@/i18n/dict";

export const metadata: Metadata = {
    title: "Lesitia. / Discography",
    description: 'Official website of a composer "Lesitia."',
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
                    Guidelines
                </span>
            </div>

            <div className="flex flex-col pt-[70px] w-full min-h-screen font-language text-center">

				<div className="flex flex-col place-content-center items-center py-[10px] justify-center w-full h-full px-[70px] lg:px-[20vw]">
					<p className="font-language font-[700] text-2xl">
						{t.guideline.disclaimer.main}
					</p>
					<p className="font-language font-[600]">
						{t.guideline.disclaimer.sub.prefix} <Link target="_blank" rel="noopener noreferrer" href={`${t.guideline.href}`} className="text-blue-600 dark:text-blue-300 hover:underline">{t.guideline.hrefname}</Link>{t.guideline.disclaimer.sub.suffix}
					</p>
				</div>
				<div className="flex flex-col font-language items-center py-[30px] justify-center bg-black/17.5 dark:bg-[#3f3d66]/50 w-full h-fit transition-padding duration-200 lg:duration-0 ease-out">
					<p className="font-[700] text-4xl">
						{t.guideline.main.name}
					</p>
					<br/>
					<p className="font-[700] text-2xl">
						{t.guideline.main.audio.name}
					</p>
					<p className="font-[600] break-keep">
						{t.guideline.main.audio.description}
					</p>
					<p className="font-[500] break-keep text-xs">
						- {t.guideline.main.audio.ignore}
					</p>
					<br/>
					<p className="font-[500] break-keep">
						{t.guideline.main.audio.moreInfo.prefix} <Link target="_blank" rel="noopener noreferrer" href={`${t.guideline.href}`} className="text-blue-600 dark:text-blue-300 hover:underline">{t.guideline.hrefname}</Link>{t.guideline.main.audio.moreInfo.suffix}
					</p>
				</div>
				<div className="flex flex-col font-language items-center px-[30px] md:px-[60px] lg:px-[20vw] py-[30px] justify-center bg-black/10 dark:bg-[#3f3d66]/25 w-full h-fit transition-padding duration-200 lg:duration-0 ease-out">
					<p className="font-[700] text-4xl">
						{t.guideline.restriction.name}
					</p>
					<br/>
					<p className="font-[700] text-2xl">
						{t.guideline.restriction.general.name}
					</p>
					<p className="font-[600] break-keep text-center">
						1. {t.guideline.restriction.general.desc1}<br/>
						2. {t.guideline.restriction.general.desc2}<br/>
						{t.guideline.restriction.general.desc2_1}<br/>
						{t.guideline.restriction.general.desc3}<br/>
					</p>
					<br/>
					<p className="font-[700] text-2xl">
						{t.guideline.restriction.audio.name}
					</p>
					<p className="font-[600] break-keep text-center">
							{t.guideline.restriction.audio.desc1}<br/>
						{t.guideline.restriction.audio.desc2}<br/>
						{t.guideline.restriction.audio.desc3}<br/>
					</p>
					<br/>
					<p className="font-[500] break-keep">
						{t.guideline.restriction.moreInfo.prefix} <Link target="_blank" rel="noopener noreferrer" href={`${t.guideline.href}`} className="text-blue-600 dark:text-blue-300 hover:underline">{t.guideline.hrefname}</Link>{t.guideline.restriction.moreInfo.suffix}
					</p>
				</div>
				
                <p className="mt-auto w-full font-lexendgiga font-[700] text-right tracking-[-0.1em] p-[10px]">
                    © 2020~ Lesitia. / All rights reserved.
                </p>
            </div>
        </div>
    );
}
