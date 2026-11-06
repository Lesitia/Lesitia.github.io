import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface ImageOverlayProps {
	src: string | StaticImageData;
	alt: string;
	width?: string;            // e.g., "w-full", "w-[500px]"
	height?: string;           // e.g., "h-[400px]", "h-96", "h-screen"
	textStyle?: string;        // Tailwind background class, e.g., "bg-black/50" or "bg-blue-900/40"
	subTextStyle?: string;    // Tailwind background class, e.g., "bg-black/50" or "bg-blue-900/40"
	overlayColor?: string;     // Tailwind background class, e.g., "bg-black/50" or "bg-blue-900/40"
	darkOverlayColor?: string; // Tailwind background class, e.g., "bg-black/50" or "bg-blue-900/40"
	title?: string;
	subtitle?: string;
	children?: ReactNode | null
}

export default function ImageOverlay({
	src,
	alt,
	width = 'w-full',
	height = 'h-[400px]',
	textStyle = "text-3xl font-bold",
	subTextStyle = "text-md font-semibold",
	overlayColor = 'bg-black/40',
	darkOverlayColor = 'dark:' + overlayColor,
	title = "",
	subtitle = "",
	children = null
}: ImageOverlayProps) {
	return (
		// We combine the width and height props dynamically into the parent container
		<div className={`relative ${width} ${height} overflow-hidden`}>
			
			{/* Background Image */}
			<Image
				src={src}
				alt={alt}
				fill
				className="object-cover"
				priority
			/>
			{/* Customizable Overlay Tint & Text Content */}
			<div className={`absolute inset-0 ${overlayColor} ${darkOverlayColor} flex flex-col justify-center items-center text-white p-6 text-center`}>
				<h2 className={`${textStyle}`}>{title}</h2>
				{subtitle && <p className={`${subTextStyle}`}>{subtitle}</p>}
				{children}
			</div>
		</div>
	);
}
