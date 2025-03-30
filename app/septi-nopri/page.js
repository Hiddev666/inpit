'use client'

import { useSearchParams } from "next/navigation";
import GreetingPopUp from "./layout/greetingPopUp";
import HeroSection from "./layout/heroSection";
import BraidGroom from "./layout/braidGroom";
import { Suspense, useEffect, useState } from "react";
import Gallery from "./layout/gallery";
import LoveStory from "./layout/loveStory";
import Image from "next/image";

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
        <div className="flex flex-col items-center w-full">
            {visible && (
                <Loader />
            )}
            <div className="w-md">
                <GreetingPopUp guest={to} />
                <HeroSection />
                <BraidGroom />
                <Gallery />
                <LoveStory />
            </div>
        </div>
    );
};


export default InpitSeptiNopri;
