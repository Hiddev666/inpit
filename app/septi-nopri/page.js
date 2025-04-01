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

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const Loader = () => {
        return (
            <div className="w-full h-screen fixed bg-white z-100 flex justify-center items-center">
                <Image
                    src={"/img/septi-nopri/logo2.svg"}
                    width={200}
                    height={200}
                    alt="Logo"
                    className=""
                />
            </div>
        )
    }

    return (
        <>

            <div className="flex flex-col items-center w-full">
                {visible && (
                    <Loader />
                )}
                <div className="w-md relative">
                    <AudioPlayer />
                    <GreetingPopUp guest={to} />
                    <HeroSection />
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
