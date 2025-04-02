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

const GreetingPopUp = (props) => {
    return (
        <div className="bg-neutral-800 h-screen bg-[url(/img/septi-nopri/greetingImage.png)] bg-cover bg-top flex items-end p-10 relative" id="greeting">
            <Image
                src={"/img/septi-nopri/leaves.png"}
                width={230}
                height={230}
                className="absolute right-0 bottom-0"
                id="leaves"
                alt="Leaves"
                />
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className={`text-6xl sm:text-7xl ${berkshire.className} text-white overflow-hidden`}>Septi<br />& Nopri</h1>
                </div>
                <div className={`${worksans.className} flex flex-col gap-3`}>
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
