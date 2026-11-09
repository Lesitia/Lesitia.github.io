
import { getDictionary } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";

interface DiscographyInfoProps {
    lang: Locale;
}

export default function DiscographyInfo({
    lang,
}: DiscographyInfoProps) {
    const t = getDictionary(lang);

    return (
        <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            self-center w-fit mt-[30px] gap-[15px]
        ">

            {/* Total Songs */}
            <div className="
                col-span-1 md:col-span-2 lg:col-span-1
                flex flex-col items-center justify-center
                px-[20px] py-[10px] min-w-[300px] min-h-[80px]
                bg-black/10 dark:bg-[#3f3d66]/50
                rounded-[25px] text-center
            ">
                <p className="font-[800] text-5xl">
                    6
                </p>

                <p className="font-lexend font-[600] text-base whitespace-nowrap">
                    {t.discography.totalDiscography}
                </p>
            </div>

            {/* Total Singles */}
            <div className="
                flex flex-col items-center justify-center
                px-6 sm:px-[10px] py-[10px] min-w-[300px] min-h-[80px]
                bg-black/10 dark:bg-[#3f3d66]/50
                rounded-[25px] text-center
            ">
                <p className="font-[800] text-5xl">
                    2
                </p>

                <p className="font-lexend font-[600] text-base whitespace-nowrap">
                    {t.discography.totalSingle}
                </p>
            </div>

            {/* Total Compilations */}
            <div className="
                flex flex-col items-center justify-center
                px-6 sm:px-[10px] py-[10px] min-w-[300px] min-h-[80px]
                bg-black/10 dark:bg-[#3f3d66]/50
                rounded-[25px] text-center
            ">
                <p className="font-[800] text-5xl">
                    4
                </p>

                <p className="font-lexend font-[600] text-base whitespace-nowrap">
                    {t.discography.totalCompilation}
                </p>
            </div>

        </div>
    );
}
