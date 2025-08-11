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

const GreetingPopUp = (props) => {
    return (
        <div className="bg-neutral-800 h-svh bg-[url(/img/alfenta-angelina/greetingImage.png)] bg-cover bg-top flex items-end p-10 relative" id="greeting">
            <Image
                src={"/img/alfenta-angelina/leaves.png"}
                width={150}
                height={150}
                className="absolute right-0 bottom-0"
                id="leaves"
                alt="Leaves"
            />
            <Image
                src={"/img/alfenta-angelina/leaves.png"}
                width={170}
                height={170}
                className="absolute left-0 top-0 rotate-180"
                id="leaves-top"
                alt="Leaves"
            />
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className={`text-5xl ${cormorant.className} font-semibold text-white overflow-hidden`}>ALFENTA<br />& ANGELINA</h1>
                </div>
                <div className={`${gabarito.className} flex flex-col gap-3`}>
                    <div>
                        <p className="text-white text-sm p-0 mb-0">Kepada Yth.</p>
                        <p className={`text-2xl text-white p-0 mb-0 font-semibold`}>{props.guest}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GreetingPopUp
