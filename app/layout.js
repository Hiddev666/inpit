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
    title: "Alfenta & Angelina Wedding",
    description: "Undangan Pernikahan Digital Alfenta & Angelina",
    openGraph: {
        title: "Alfenta & Angelina Wedding",
        description: "Undangan Pernikahan Digital Alfenta & Angelina",
        url: "https://inpit.vercel.app/alfenta-angelina",
        type: "website",
        images: [
            {
                url: "/img/thumbnail.png", // Ganti dengan URL gambar lo
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
