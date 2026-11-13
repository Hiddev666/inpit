"use client";

import { useSearchParams } from "next/navigation";
import GreetingPopUp from "./layout/greetingPopUp";
import HeroSection from "./layout/heroSection";
import BraidGroom from "./layout/braidGroom";
import { Suspense, useEffect, useState } from "react";
import Gallery from "./layout/gallery";
import LoveStory from "./layout/loveStory";
import Image from "next/image";
import DigitalEnvelope from "./layout/digitalEnvelope";
import Wish from "./layout/wish";
import Last from "./layout/end";
import Footer from "../components/footer";
import Head from "next/head";
import { NextSeo } from "next-seo";
import AudioPlayer from "../components/audioPlayer";
import {
    Berkshire_Swash,
    Work_Sans,
    Cormorant,
    Gabarito,
    Sofia,
    Instrument_Serif
} from "next/font/google";
import Detail from "./layout/details";
import AOS from "aos";
import "aos/dist/aos.css";
import EventSection from "./layout/event";

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

const berkshire = Berkshire_Swash({
    subsets: ["latin"],
    weight: "400",
});

const worksans = Work_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const InpitSeptiNopri = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
        <Suspense fallback={<div>Loading ... </div>}>
            <Content />
        </Suspense>
    );
};

const Content = () => {
    const searchParams = useSearchParams();
    const to = searchParams.get("to");

    const [visible, setVisible] = useState(true);
    const [loadingVisible, setLoadingVisible] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setVisible(false);
    //     }, 4000);

    //     return () => clearTimeout(timer);
    // }, []);

    const Loading = () => {
        setTimeout(() => {
            setVisible(false);
        }, 4000);

        return (
            <>
                <p className="text-white">Wait a minute... </p>
            </>
        );
    };

    const Loader = () => {
        return (
            <div className="fixed w-full h-screen z-100">
                <div className="bg-[#672421] w-full h-screen z-100 flex justify-center items-center relative">
                    <Image
                        src={"/img/rizki-tesa/background-pattern.svg"}
                        width={200}
                        height={200}
                        className="absolute left-0 top-0 h-full w-full object-cover z-0"
                    />
                    <div className="flex flex-col gap-3 overflow-hidden">
                        <h1
                            className={`text-6xl sm:text-6xl ${sofia.className} text-white overflow-hidden p-2`}
                            data-aos="fade-up"
                            data-aos-once="true"
                        >
                            Rizki
                            <br />Tesa
                        </h1>
                        {!loadingVisible &&
                            <a href="#greeting">
                                <button
                                    className="cursor-pointer font-medium flex gap-2 p-2 rounded-md w-max bg-[#8F1515] text-white"
                                    onClick={() => setLoadingVisible(true)}
                                    data-aos="fade-down"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                >
                                    <Image
                                        src={"/img/septi-nopri/envelope.svg"}
                                        width={20}
                                        height={20}
                                        alt="Envelope"
                                        data-aos="fade-right"
                                        data-aos-delay="300"
                                    />
                                    <p data-aos="fade-left" data-aos-delay="300">
                                        Buka Undangan
                                    </p>
                                </button>
                            </a>
                        }
                        {loadingVisible && <Loading />}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="flex flex-col items-center w-full">
                {visible && <Loader />}
                <div className="w-full sm:w-md relative">
                    <AudioPlayer />
                    <GreetingPopUp guest={to} />
                    <BraidGroom />
                    <EventSection />
                    <Wish />
                    <DigitalEnvelope />
                    <LoveStory />
                    <Gallery />
                    <Last />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default InpitSeptiNopri;
