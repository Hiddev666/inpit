import Image from "next/image"
import { Berkshire_Swash, Work_Sans } from "next/font/google"
import { useState } from "react"
import Countdown from "../components/countdown"

const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

const HeroSection = (props) => {
    return (
        <div className="bg-neutral-800 h-screen bg-[url(/img/septi-nopri/heroImage.png)] bg-cover bg-bottom flex flex-col justify-end items-center p-10 relative" id="hero">
            <Image
                src={"/img/septi-nopri/leaves.png"}
                width={200}
                height={200}
                className="absolute right-0 bottom-0"
                id="leaves"
                alt="Leaves"
            />
            <Image
                src={"/img/septi-nopri/leaves.png"}
                width={230}
                height={230}
                className="absolute left-0 top-0 rotate-180"
                id="leaves-top"
                alt="Leaves"
            />
            <div className="w-3/4 flex flex-col items-center gap-5">
                <Image
                    src={"/img/septi-nopri/logo.svg"}
                    width={100}
                    height={100}
                    alt="Logo"
                    data-aos="zoom-in"
                />
                <Countdown font={worksans.className} />
            </div>
        </div>
    )
}

export default HeroSection
