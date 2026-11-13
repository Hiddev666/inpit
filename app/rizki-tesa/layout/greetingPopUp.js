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

const heroDecorationImages = [
    "/img/rizki-tesa/hero-decoration.svg",
    "/img/rizki-tesa/hero-decoration-1.svg",
    "/img/rizki-tesa/hero-decoration-2.svg",
];

const GreetingPopUp = (props) => {
    const [heroDecoration, setHeroDecoration] = useState(heroDecorationImages[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroDecoration((current) => {
                const currentIndex = heroDecorationImages.indexOf(current);
                const nextIndex = (currentIndex + 1) % heroDecorationImages.length;
                return heroDecorationImages[nextIndex];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="bg-[#672421] h-svh flex items-end relative"
            id="greeting"
        >
            <div className="bg-linear-to-t from-black/70 to-black/0 w-full h-1/2 absolute bottom-0 left-0 z-0"></div>
            <Image
                src={"/img/alfenta-angelina/leaves.png"}
                width={200}
                height={200}
                className="absolute right-0 bottom-0 z-90"
                id="leaves"
                alt="Leaves"
            />
            <Image
                src={"/img/rizki-tesa/background-pattern.svg"}
                width={200}
                height={200}
                className="absolute left-0 top-0 h-full w-full object-cover z-0"
            />

            <div className="flex flex-col justify-around h-svh absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="w-100 flex flex-col items-center justify-center px-2 mt-5">
                    {/* Guest Name */}
                    <div className={`${instrumentSerif.className} flex flex-col gap-3`}>
                        <div className="tracking-wide flex justify-center items-end gap-1">
                            <p className="text-white text-base p-0 mb-0">Kepada Yth.</p>
                            <p className={`text-2xl text-white p-0 mb-0 font-medium`}>
                                {props.guest}
                            </p>
                        </div>
                    </div>
                    {/* Hero Decoration */}
                    <Image
                        src={heroDecoration}
                        width={200}
                        height={200}
                        className="w-full mt-9"
                        id="hero-decoration"
                        alt="Hero Decoration"
                    />
                </div>

                <div className="flex flex-col gap-5 w-full z-1 px-5">
                    <h1
                        className={`text-7xl ${sofia.className} font-semibold text-white overflow-hidden ps-3`}
                    >
                        Rizki
                        <br />
                        Tesa
                    </h1>
                </div>
            </div>

        </div>
    );
};

export default GreetingPopUp;
