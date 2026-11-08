

export default function DiscographyInfo() {
	return (
		// We combine the width and height props dynamically into the parent container
		
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center w-fit mt-[30px] gap-[15px]">
			<div className="
				col-span-1 md:col-span-2 lg:col-span-1 
				flex flex-col items-center justify-center
				px-[20px] py-[10px] min-w-[260px] min-h-[80px]
				bg-black/10 dark:bg-[#3f3d66]/50
				rounded-[25px] text-center"
			>
				<p className="font-[800] text-5xl">
					6
				</p>

				<p className="font-lexend font-[600] text-base whitespace-nowrap">
					전체 Discography에 수록된 곡 수
				</p>
			</div>
			<div className="
				flex flex-col items-center justify-center
				px-6 sm:px-[10px] py-[10px] min-w-[260px] min-h-[80px]
				bg-black/10 dark:bg-[#3f3d66]/50
				rounded-[25px] text-center"
			>
				<p className="font-[800] text-5xl">
					2
				</p>

				<p className="font-lexend font-[600] text-base whitespace-nowrap">
					전체 싱글 앨범 수
				</p>
			</div>
			<div className="
				flex flex-col items-center justify-center
				px-6 sm:px-[10px] py-[10px] min-w-[260px] min-h-[80px]
				bg-black/10 dark:bg-[#3f3d66]/50
				rounded-[25px] text-center"
			>
				<p className="font-[800] text-5xl">
					2
				</p>

				<p className="font-lexend font-[600] text-base whitespace-nowrap">
					참여한 컴필레이션 수
				</p>
			</div>
		</div>
	);
}