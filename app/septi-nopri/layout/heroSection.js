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
        <div className="bg-neutral-800 h-screen bg-[url(/img/septi-nopri/heroImage.png)] bg-cover bg-top flex flex-col justify-between items-center p-10 relative" id="hero">
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
            <div className="w-full flex justify-between text-white gap-4 overflow-hidden">
                <div className="w-full flex flex-col gap-3" data-aos="fade-up">
                    <h2 className={`${berkshire.className} text-3xl`}>Resepsi</h2>
                    <div className="flex flex-col gap-1">
                        <p className={`${worksans.className} font-semibold`}>Minggu, 13 April 2025</p>
                        <p className={`${worksans.className} text-xs`}>
                            Lapangan Serbaguna Komplek Kencana Damai RT.035 RW.010 Kelurahan Sukamaju Kecamatan Sako Kota Palembang
                        </p>
                    </div>
                    <a href="https://maps.app.goo.gl/t1wWUB7GY6ztdHKH9?g_st=aw" className="w-full">
                        <div className={`${worksans.className} text-sm font-semibold text-[#303030] bg-white flex gap-2 justify-center rounded-sm py-2`}>
                            <Image
                                src={"/img/septi-nopri/location.svg"}
                                width={15}
                                height={15}
                                alt="Location"
                                data-aos="flip-up"
                            />
                            Buka Maps
                        </div>
                    </a>
                </div>
                <div className="w-full flex flex-col gap-2" data-aos="fade-up">
                    <h2 className={`${berkshire.className} text-3xl`}>Akad Nikah</h2>
                    <div className="flex flex-col gap-1">
                        <p className={`${worksans.className} font-semibold`}>Sabtu, 12 April 2025</p>
                        <p className={`${worksans.className} text-xs`}>
                            Kediaman Mempelai Wanita Komplek Kencana Damai Blok AH-03 RT.060 RW.010 Kelurahan Sukamaju Kecamatan Sako Kota Palembang
                        </p>
                    </div>
                    <a href="https://maps.app.goo.gl/oKHrpK9CtCSzPbo6A?g_st=aw" className="w-full">
                        <div className={`${worksans.className} text-sm font-semibold text-[#303030] bg-white flex gap-2 justify-center rounded-sm py-2`}>
                            <Image
                                src={"/img/septi-nopri/location.svg"}
                                width={15}
                                height={15}
                                alt="Location"
                                data-aos="flip-up"
                            />
                            Buka Maps
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
