import { Geist, Geist_Mono, Berkshire_Swash, Bokor } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const bokor = Bokor({
    weight: "400",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Septi & Nopri Wedding",
    description: "Undangan Pernikahan Digital Septi & Nopri",
    openGraph: {
        title: "Septi & Nopri Wedding",
        description: "Undangan Pernikahan Digital Septi & Nopri",
        url: "http://localhost:3000",
        type: "website",
        images: [
            {
                url: "/img/septi-nopri/thumbnail.png", // Ganti dengan URL gambar lo
                width: 1200,
                height: 630,
                alt: "Thumbnail gambar",
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>Judul Custom</title>
                <meta name="description" content="Deskripsi singkat tentang web lo" />
            </Head>
            <body
                className={`${bokor.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
