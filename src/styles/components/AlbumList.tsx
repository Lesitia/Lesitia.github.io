
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface AlbumListProps {
    src: string | StaticImageData;
    alt?: string;
    index?: number;
    width?: string;
    height?: string;
    textStyle?: string;
    subTextStyle?: string;
    albumName?: string;
    songList?: AlbumSongListProps[];
    albumDesc?: string;
    title?: string;
    subtitle?: string;
    children?: ReactNode | null;
}

interface AlbumSongListProps
{
	songName: string;
	composerName: string;
}

export default function AlbumList({
    src,
    alt = "Album Cover",
    index = 1,
    width = "w-[full]",
    height = "h-auto",
    textStyle = "",
    subTextStyle = "",
    albumName,
    songList,
    albumDesc,
    title,
    subtitle,
    children,
}: AlbumListProps) {

    const isOdd = index % 2 !== 0;

    return (
        <div
            className={`flex flex-col lg:flex-row tracking-[-0.15em] ${
                isOdd ? "lg:text-left" : "lg:flex-row-reverse bg-black/10 dark:bg-[#3f3d66]/50 lg:text-right"
            } place-content-center items-center justify-start gap-[20px] px-[5vw] lg:px-[10vw] py-[30px] ${width} ${height}`}
        >
            {/* Album Cover */}
            <div className="relative w-full max-w-[256px] self-start aspect-square shrink-0">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
					sizes="(max-width: 256px) 100vw, 50vw"
					loading="eager"
                />
            </div>

            {/* Album Description */}
            <div className="flex flex-col justify-center w-full min-w-0">

				{title && (
					<div>
						<h2 className={`text-3xl font-bold ${textStyle} tracking-[0em]`}>
							{`${(index).toString().length <= 1 ? `0${(index)}` : (index)}`}
						</h2>
						<br />
					</div>
                )}

                {title && (
                    <h2 className={`text-3xl font-bold ${textStyle}`}>
                        {title}
                    </h2>
                )}

                {subtitle && (
                    <h3 className={`text-xl ${subTextStyle}`}>
                        {subtitle}
                    </h3>
                )}

                {albumName && (
                    <h2 className="text-2xl font-bold">
                        {albumName}
                    </h2>
                )}

                {albumDesc && (
                    <p className="mt-4 whitespace-pre-line">
                        {albumDesc}
                    </p>
                )}

				{songList && (
					<ol type="1" className="mt-4 list-disc font-lexend lg:justify-start tracking-[-0.05em]">
						{songList.map((song, i) => {
							// 곡 이름과 작곡가 이름의 총 글자 수
							const textLength = song.songName.length + song.composerName.length;

							// 20자 초과 시 자간을 점진적으로 축소 (최대 -0.1em)
							const letterSpacing = Math.max(
								-0.075,
								- Math.max(0, textLength - 20) * 0.00375
							);

							// 40자 초과 시 폰트 크기를 점진적으로 축소 (최소 12px)
							const fontSize = Math.max(
								12,
								16 - Math.max(0, textLength - 40) * 0.2
							);

							return (
								<div
									key={i}
									className={`flex w-full gap-[5px] ml-3 ${
										isOdd
											? "lg:flex-row"
											: "lg:flex-row-reverse lg:-ml-3"
									} ${
										song.composerName.includes("Lesitia.")
											? "text-blue-600 dark:text-blue-400"
											: ""
									}`}
								>
									{/* Numbering: 크기 고정 */}
									<b
										className="flex w-[20px] min-w-[20px] shrink-0 tabular-nums"
										style={{ fontSize: "16px" }}
									>
										{(i + 1) < 10 ? `0${i + 1}` : `${i + 1}`}
									</b>

									<p className="shrink-0">|</p>

									{/* Song Information: 자간 및 폰트 크기 조절 */}
									<span
										className="self-center"
										style={{
											letterSpacing: `${letterSpacing}em`,
											fontSize: `${fontSize}px`,
										}}
									>
										{song.songName} / {song.composerName}
									</span>
								</div>
							);
						})}
					</ol>
				)}

                {children}
            </div>
        </div>
    );
}
