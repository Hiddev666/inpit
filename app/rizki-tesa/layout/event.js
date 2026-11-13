"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    Berkshire_Swash,
    Work_Sans,
    Cormorant,
    Gabarito,
    Sofia,
    Instrument_Serif,
} from "next/font/google";
import Countdown from "../components/countdown";
import DetailCard1 from "../components/DetailCard1";

const cormorant = Cormorant({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const sofia = Sofia({
    subsets: ["latin"],
    weight: ["400"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
})

const gabarito = Gabarito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const EventSection = (props) => {
    return (
        <div
            className="bg-[#672421] flex flex-col relative overflow-hidden gap-9"
            id="greeting"
        >
            <Image
                src={"/img/rizki-tesa/paper.svg"}
                width={200}
                height={200}
                className="w-full z-1"
            />

            <div className="w-full z-1 flex flex-col justify-center items-center">

                {/* Clock */}
                <div className="relative w-full flex flex-col justify-center items-center mt-9">
                    <Image
                        src={"/img/rizki-tesa/paper-inside-envelope.svg"}
                        width={200}
                        height={200}
                        className="w-3/4"
                    />
                    <Countdown font={instrumentSerif.className} />
                </div>
                <h1 className={`${sofia.className} text-white text-4xl font-bold p-4`}>Hari Yang Ditunggu</h1>
            </div>

            <div className="px-9 w-full overflow-hidden z-10 flex flex-col gap-9 mb-9">
                <DetailCard1
                    time="December 12, 2026 10:00:00"
                    title="Akad Nikah"
                    image="/img/rizki-tesa/event-detail-1.svg"
                    date="Sabtu, 12 Desember 2026 10:00 WIB"
                    address="Desa Gedung Agung LK5 (Danau Nangka) Kec. Merapi Timur Kab. Lahat"
                    map="https://maps.app.goo.gl/wUKUr1sv3v4T4Lnb8" />
                <DetailCard1
                    time="December 13, 2026 10:00:00"
                    title="Resepsi"
                    image="/img/rizki-tesa/event-detail-2.svg"
                    date="Minggu, 13 Desember 2026 10:00 WIB"
                    address="Desa Gedung Agung LK5 (Danau Nangka) Kec. Merapi Timur Kab. Lahat"
                    map="https://maps.app.goo.gl/wUKUr1sv3v4T4Lnb8" />
            </div>

            <Image
                src={"/img/rizki-tesa/paper.svg"}
                width={200}
                height={200}
                className="w-full z-1 rotate-180"
            />

            {/* Backround Pattern */}
            <Image
                src={"/img/rizki-tesa/background-pattern.svg"}
                width={200}
                height={200}
                className="absolute left-0 top-0 h-full w-full object-cover z-0"
            />
        </div>
    );
};

export default EventSection;
