import Image from "next/image"
import { Berkshire_Swash, Work_Sans } from "next/font/google"

const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

const DigitalEnvelope = () => {
    return (
        <div className="w-full p-10 flex flex-col items-center gap-10  bg-[url(/img/septi-nopri/blured2.png)] bg-cover bg-bottom" id="gallery">
            <p className={`text-4xl text-white ${berkshire.className} overflow-hidden`}>Amplop Digital</p>
            <div className="w-full flex flex-col justify-center gap-4">
                <div className="bg-white p-4 rounded-lg flex flex-col gap-5">
                    <div className="flex justify-between">
                        <Image
                            src={"/img/septi-nopri/sumselbabel.png"}
                            width={120}
                            height={120}
                            alt="Sumsel Babel"
                            className="h-min"
                        />
                        <Image
                            src={"/img/septi-nopri/chip.svg"}
                            width={40}
                            height={40}
                            alt="Sumsel Babel"
                            className="h-min"
                        />
                    </div>
                    <p className={`${worksans.className} text-2xl font-semibold text-[#202020]`}>1800908238</p>
                    <div className={`flex flex-col ${worksans.className}`}>
                        <p className="text-sm">Atas Nama</p>
                        <p className="font-semibold">Septi Kurnia</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex flex-col gap-5">
                    <div className="flex justify-between">
                        <Image
                            src={"/img/septi-nopri/bni.png"}
                            width={80}
                            height={80}
                            alt="Sumsel Babel"
                            className="h-min"
                        />
                        <Image
                            src={"/img/septi-nopri/chip.svg"}
                            width={40}
                            height={40}
                            alt="Sumsel Babel"
                            className="h-min"
                        />
                    </div>
                    <p className={`${worksans.className} text-2xl font-semibold text-[#202020]`}>0228834143</p>
                    <div className={`flex flex-col ${worksans.className}`}>
                        <p className="text-sm">Atas Nama</p>
                        <p className="font-semibold">Ari Nopriansah</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalEnvelope
