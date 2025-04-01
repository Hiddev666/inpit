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

const BraidGroom = () => {
    return (
        <div className="w-full p-10 flex flex-col items-center gap-10 bg-white" id="braidgroom">
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="h-max w-full relative flex justify-center item-end" data-aos="zoom-in-up">
                    <Image
                        src={"/img/septi-nopri/groom-leave.svg"}
                        width={350}
                        height={350}
                        className="absolute -top-10 h-full rotate-y-180"
                        id="leave-updown"
                        alt="Groom Leaves"
                        />
                    <Image
                        src={"/img/septi-nopri/braid-front.svg"}
                        width={250}
                        height={250}
                        className="absolute bottom-0 h-full"
                        alt="Braid Front"
                        />
                    <Image
                        src={"/img/septi-nopri/braid-back.svg"}
                        width={250}
                        height={250}
                        className=""
                        alt="Braid Back"
                        />
                </div>
                <div className="w-3/4 flex flex-col gap-2 overflow-hidden">
                    <h1 className={`${berkshire.className} text-2xl overflow-hidden`}>Septi Kurnia, S.Pd., Gr.</h1>
                    <p className={`${worksans.className}`}>Putri Bungsu dari Bapak Nungcik & Ibu Rumnah (Almh)</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="h-max w-full relative flex justify-center item-end" data-aos="zoom-in-up">
                    <Image
                        src={"/img/septi-nopri/groom-leave.svg"}
                        width={350}
                        height={350}
                        className="absolute -top-10 h-full"
                        id="leave-updown"
                        alt="Groom Leaves"
                        />
                    <Image
                        src={"/img/septi-nopri/groom-front.svg"}
                        width={250}
                        height={250}
                        className="absolute bottom-0 h-full"
                        alt="Groom Front"
                        />
                    <Image
                        src={"/img/septi-nopri/groom-back.svg"}
                        width={250}
                        height={250}
                        className=""
                        alt="Groom Back"
                    />
                </div>
                <div className="w-3/4 flex flex-col gap-2 overflow-hidden">
                    <h1 className={`${berkshire.className} text-4xl overflow-hidden`}>Ari Nopriansah</h1>
                    <p className={`${worksans.className}`}>Putra Ke-Empat dari Bapak Jang Cik & Ibu Sulaini</p>
                </div>
            </div>

        </div>
    )
}

export default BraidGroom
