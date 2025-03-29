'use client'

import { useSearchParams } from "next/navigation";
import GreetingPopUp from "./layout/greetingPopUp";
import HeroSection from "./layout/heroSection";
import BraidGroom from "./layout/braidGroom";
import { Suspense } from "react";


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

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-md">
                <GreetingPopUp guest={to} />
                <HeroSection />
                <BraidGroom />
            </div>
        </div>
    );
};


export default InpitSeptiNopri;
