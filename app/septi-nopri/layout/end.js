'use client'

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

const Last = () => {

    return (
        <div className="w-full p-10 flex flex-col items-center gap-10 bg-white" id="Last">
            <div className="w-full p-3 flex flex-col gap-5">
                <Image
                    src={"/img/septi-nopri/last.svg"}
                    width={100}
                    height={100}
                    alt="Last"
                    className="w-full"
                />
                <div>
                    <p className={`${berkshire.className} text-2xl`}>Terima Kasih</p>
                    <p className={`${worksans.className} text-xs`}>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                        berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
                        Atas kehadiran serta doa restunya,
                        kami ucapkan terima kasih.</p>
                </div>
            </div>
        </div>
    )
}

export default Last
