
import "@/app/globals.css";
import Image from "next/image";
import type { Metadata } from "next";
import { Logo } from "@/assets";
import NotFoundHomeLink from "@/components/NotFoundHomeLink";

export const metadata: Metadata = {
    title: "404 / Page Not Found",
    description: "There's nothing.",
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-(--primary-foreground) transition-colors duration-200 ease-out">
            <div className="flex flex-1 flex-col items-center justify-center font-sans">
                <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">

                    <Image
                        className="h-[80px] w-[80px]"
                        src={Logo}
                        alt="logo"
                        width={80}
                        height={80}
                        priority
                    />

					<div className="flex flex-col items-center justify-center gap-0 text-center">
						<h1 className="font-pretendard text-7xl font-[900] leading-none tracking-tight">
							404
						</h1>
						<p className="font-lexendgiga text-3xl font-semibold leading-none tracking-tight">
							Page Not Found.
						</p>
					</div>
					<br />

                    <NotFoundHomeLink />
                </div>
            </div>
        </div>
    );
}
