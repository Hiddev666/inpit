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

const DigitalEnvelope = () => {
    return (
        <div className="w-full p-10 flex flex-col items-center gap-10  bg-[url(/img/alfenta-angelina/blured2.png)] bg-cover bg-bottom" id="gallery">
            <p className={`text-4xl text-white ${cormorant.className} overflow-hidden`}>Amplop Digital</p>
            <div className="w-full flex flex-col justify-center gap-4">
                <div className="bg-white p-4 rounded-lg flex flex-col gap-5" data-aos="flip-up">
                    <div className="flex justify-between">
                        <Image
                            src={"/img/alfenta-angelina/mandiri.svg"}
                            width={120}
                            height={120}
                            alt="Sumsel Babel"
                            className="h-min"
                        />
                        <Image
                            src={"/img/alfenta-angelina/chip.svg"}
                            width={40}
                            height={40}
                            alt="Sumsel Babel"
                            className="h-min"
                        />
                    </div>
                    <p className={`${gabarito.className} text-2xl font-semibold text-[#202020]`}>1120018193461</p>
                    <div className={`flex flex-col ${gabarito.className}`}>
                        <p className="text-sm">Atas Nama</p>
                        <p className="font-semibold">Alfenta Egi Putra</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex flex-col gap-5" data-aos="flip-up">
                    <div className="flex justify-between">
                        <Image
                            src={"/img/alfenta-angelina/bca.svg"}
                            width={80}
                            height={80}
                            alt="Sumsel Babel"
                            className="h-min"
                        />
                        <Image
                            src={"/img/alfenta-angelina/chip.svg"}
                            width={40}
                            height={40}
                            alt="Sumsel Babel"
                            className="h-min"
                        />
                    </div>
                    <p className={`${gabarito.className} text-2xl font-semibold text-[#202020]`}>8120388861</p>
                    <div className={`flex flex-col ${gabarito.className}`}>
                        <p className="text-sm">Atas Nama</p>
                        <p className="font-semibold">Angelina Alfa Reza</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalEnvelope
