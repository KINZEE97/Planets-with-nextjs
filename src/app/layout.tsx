import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Planets APP",
    description: "Aplicativo criado ao longo das aulas de NEXT.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <header
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: "1.5rem",
                    }}
                >
                    <div>Planets App</div>
                    <nav>
                        <Link href={"/"}>Página inicial</Link>
                        {" | "}
                        <Link href={"/planets"}>Planetas</Link>
                        {" | "}
                        <Link href={"/about"}>Página sobre</Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
