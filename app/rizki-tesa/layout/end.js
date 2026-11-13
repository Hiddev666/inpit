'use client'

import Image from "next/image"
import { Berkshire_Swash, Work_Sans, Cormorant, Gabarito, Sofia, Instrument_Serif } from "next/font/google"

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})


const sofia = Sofia({
    subsets: ["latin"],
    weight: ["400"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
})

const gabarito = Gabarito({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
})

const Last = () => {

    return (
        <div className="w-full p-10 flex flex-col items-center gap-10 bg-white" id="Last">
            <div className="w-full p-3 flex flex-col gap-5 overflow-hidden">
                <Image
                    src={"/img/rizki-tesa/last.svg"}
                    width={100}
                    height={100}
                    alt="Last"
                    className="w-full"
                    data-aos="zoom-in-up"
                />
                <div className="p-2">
                    <p className={`${sofia.className} text-4xl font-semibold p-2`}>Terima Kasih</p>
                    <p className={`${instrumentSerif.className} text-base`}>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                        berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
                        Atas kehadiran serta doa restunya,
                        kami ucapkan terima kasih.</p>
                </div>
            </div>
        </div>
    )
}

export default Last
