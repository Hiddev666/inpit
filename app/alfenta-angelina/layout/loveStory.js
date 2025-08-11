import Image from "next/image"
import { Berkshire_Swash, Work_Sans, Cormorant, Gabarito } from "next/font/google"

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})

const gabarito = Gabarito({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
})

const LoveStory = () => {
    return (
        <div className="w-full p-10 flex flex-col items-center gap-10 bg-white" id="lovestory">
            <h1 className={`text-4xl ${cormorant.className} overflow-hidden font-semibold`}>Our Love Story</h1>
            <div className="w-full flex flex-col gap-5">
                <div className="flex gap-2">
                    <div className="">
                        <Image
                            src={"/img/alfenta-angelina/braid-profile.png"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full w-50 h-min"
                            data-aos="zoom-in-right"
                        />
                    </div>
                    <div className="border-1 border-gray-200 p-3 bg-gray-100" id="bubble-left" data-aos="zoom-in-right" data-aos-delay="300">
                        <p className={`${gabarito.className} text-sm`}>Di antara ribuan langkah dalam hidup, kami dipertemukan secara tak terduga, sepertinya semesta memang sengaja merangkainya.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="border-1 border-gray-200 p-3 bg-gray-100" id="bubble-right" data-aos="zoom-in-right" data-aos-delay="300">
                        <p className={`${gabarito.className} text-sm`}>Dari tatap yang tak sengaja tumbuhlah percakapan sederhana. Dari pertemanan, hadir kenyamanan. Perlahan rasa itu tumbuh menjadi cinta.
                            Kami berjalan bersama, melewati segala cerita. Dalam perbedaan, kami menemukan satu hal yang sama: keinginan untuk terus melangkah bersama.
                        </p>
                    </div>
                    <div className="">
                        <Image
                            src={"/img/alfenta-angelina/groom-profile.png"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full w-50 h-min"
                            data-aos="zoom-in-right"
                            />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="">
                        <Image
                            src={"/img/alfenta-angelina/braid-profile.png"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full w-50 h-min"
                            data-aos="zoom-in-right"
                        />
                    </div>
                    <div className="border-1 border-gray-200 p-3 bg-gray-100" id="bubble-left" data-aos="zoom-in-right" data-aos-delay="300">
                        <p className={`${gabarito.className} text-sm`}>Hari ini kami memulai babak baru. Bukan lagi sekedar “aku” dan “kamu”, tapi “kita”. Bukan sekedar cerita cinta, tapi janji untuk seumur hidup. Dan inilah kisah cinta kami, yang kini berlanjut menjadi ikatan suci.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoveStory
