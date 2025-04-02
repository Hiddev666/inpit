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

const Detail = () => {
    return (
        <div className="w-full flex flex-col justify-between text-neutral-900 gap-8 overflow-hidden p-10 bg-white">
            <div className="w-full flex flex-col gap-3" data-aos="fade-up">
                <h2 className={`${berkshire.className} text-3xl overflow-hidden`}>Resepsi</h2>
                <div className="flex flex-col gap-1">
                    <p className={`${worksans.className} font-semibold`}>Minggu, 13 April 2025 | 10.00 WIB</p>
                    <p className={`${worksans.className} text-sm`}>
                        Lapangan Serbaguna Komplek Kencana Damai RT.035 RW.010 Kelurahan Sukamaju Kecamatan Sako Kota Palembang
                    </p>
                </div>
                <a href="https://maps.app.goo.gl/t1wWUB7GY6ztdHKH9?g_st=aw" className="w-full">
                    <div className={`${worksans.className} text-sm font-semibold text-white bg-[#566E51] flex gap-2 justify-center rounded-sm py-2`}>
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
                <h2 className={`${berkshire.className} text-3xl overflow-hidden`}>Akad Nikah</h2>
                <div className="flex flex-col gap-1">
                    <p className={`${worksans.className} font-semibold`}>Sabtu, 12 April 2025 | 14.00 WIB</p>
                    <p className={`${worksans.className} text-sm`}>
                        Kediaman Mempelai Wanita Komplek Kencana Damai Blok AH-03 RT.060 RW.010 Kelurahan Sukamaju Kecamatan Sako Kota Palembang
                    </p>
                </div>
                <a href="https://maps.app.goo.gl/oKHrpK9CtCSzPbo6A?g_st=aw" className="w-full">
                    <div className={`${worksans.className} text-sm font-semibold text-white bg-[#566E51] flex gap-2 justify-center rounded-sm py-2`}>
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
    )
}

export default Detail
