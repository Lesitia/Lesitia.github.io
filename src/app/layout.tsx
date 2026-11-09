
import "@/app/globals.css";

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Image from "next/image";

import {
    pretendard,
    lexend,
    lexendgiga,
} from "@/styles/fonts";

import Sidebar from "@/components/layout/Sidebar";
import { Logo } from "@/assets";

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html
            lang="ko"
            className={`
                ${pretendard.variable}
                ${lexend.variable}
                ${lexendgiga.variable}
                h-full antialiased
            `}
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <div className="flex flex-col flex-1 min-h-screen bg-(--primary) transition-colors duration-200 ease-out">

                        <Sidebar />

                        <div className="
                            fixed top-0 flex flex-row
                            w-full h-[70px] z-[100]
                            px-[10px] py-[10px]
                            items-center justify-between
                            overflow-visible shadow-md/70
                            bg-[#7ebeee] dark:bg-(--primary)
                            transition-colors duration-200 ease-out
                        ">
                            <Image
                                className="dark:invert w-[50px] h-[50px]"
                                src={Logo}
                                alt="Logo"
                                priority
                            />
                        </div>

                        <div>
                            {children}
                        </div>

                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
