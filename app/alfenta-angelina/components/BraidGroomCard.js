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

const BraidGroomCard = (props) => {
    return (
        <div className="flex justify-center items-center w-full flex flex-col items-center gap-3">
            <Image
                width={100}
                height={100}
                alt="Groom"
                className="w-full"
                src={`/img/alfenta-angelina/${props.image}.svg`}
            />
            <div className="text-center">
                <h1 className={`${cormorant.className} text-xl font-semibold overflow-y-hidden scrollbar-hide p-1`} data-aos="fade-up">{props.name}</h1>
                <p className={`${gabarito.className} text-sm`} data-aos="flip-up" data-aos-delay="300" overflow-y-hidden scrollbar-hide>{props.detail}</p>
            </div>
        </div>
    )
}

export default BraidGroomCard
