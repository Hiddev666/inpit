'use client'

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

const Last = () => {

    return (
        <div className="w-full p-10 flex flex-col items-center gap-10 bg-white" id="Last">
            <div className="w-full p-3 flex flex-col gap-5 overflow-hidden">
                <Image
                    src={"/img/alfenta-angelina/last.svg"}
                    width={100}
                    height={100}
                    alt="Last"
                    className="w-full"
                    data-aos="zoom-in-up"
                />
                <div>
                    <p className={`${cormorant.className} text-3xl font-semibold`}>Terima Kasih</p>
                    <p className={`${gabarito.className} text-xs`}>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                        berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
                        Atas kehadiran serta doa restunya,
                        kami ucapkan terima kasih.</p>
                </div>
            </div>
        </div>
    )
}

export default Last
