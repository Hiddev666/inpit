'use client'

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
import { Berkshire_Swash, Work_Sans } from "next/font/google"
import Detail from "./layout/details";

const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

const InpitSeptiNopri = () => {
    return (
        <Suspense fallback={<div>Loading ... </div>}>
            <Content />
        </Suspense>
    )
};

const Content = () => {
    const searchParams = useSearchParams()
    const to = searchParams.get('to')

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
                <p className="text-neutral-800">Wait a minute... </p>
            </>
        )
    }

    const Loader = () => {
        return (
            <div className="w-full h-screen fixed bg-white z-100 flex justify-center items-center">
                <div className="flex flex-col gap-3">
                    <h1 className={`text-3xl sm:text-4xl ${berkshire.className} text-neutral-900 overflow-hidden`}>Septi<br />& Nopri</h1>
                    <a href="#greeting">
                        <button className="cursor-pointer font-medium flex gap-2 p-2 rounded-md w-max bg-[#566E51] text-white" onClick={() => setLoadingVisible(true)}>
                            <Image
                                src={"/img/septi-nopri/envelope.svg"}
                                width={20}
                                height={20}
                                alt="Envelope"
                            />
                            Buka Undangan
                        </button>
                    </a>
                    {loadingVisible && (
                        <Loading />
                    )}
                </div>
            </div>
        )
    }

    return (
        <>

            <div className="flex flex-col items-center w-full">
                {visible && (
                    <Loader />
                )}
                <div className="w-full sm:w-md relative">
                    <AudioPlayer />
                    <GreetingPopUp guest={to} />
                    <HeroSection />
                    <Detail />
                    <BraidGroom />
                    <Gallery />
                    <LoveStory />
                    <DigitalEnvelope />
                    <Wish />
                    <Last />
                    <Footer />
                </div>
            </div>
        </>
    );
};


export default InpitSeptiNopri;
