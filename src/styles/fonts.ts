
import localFont from 'next/font/local';

export const pretendard = localFont({
	src: '../../public/fonts/pretendard/PretendardVariable.woff2', // 경로 지정
	display: 'swap',
	weight: '45 930',
	variable: '--font-pretendard',
});

export const lexendgiga = localFont({
	src: '../../public/fonts/lexendgiga/LexendGiga-VariableFont_wght.woff2', // 경로 지정
	display: 'swap',
	weight: '100 900',
	variable: '--font-lexendgiga',
});

export const lexend = localFont({
	src: '../../public/fonts/lexend/Lexend-VariableFont_wght.woff2', // 경로 지정
	display: 'swap',
	weight: '100 900',
	variable: '--font-lexend',
});
