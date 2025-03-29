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
        <div className="bg-neutral-800 h-screen bg-[url(/img/septi-nopri/greetingImage.png)] bg-cover bg-top flex items-end p-10 relative">
            <Image
                src={"/img/septi-nopri/leaves.png"}
                width={300}
                height={300}
                className="absolute right-0 bottom-0"
                id="leaves"
                alt="Leaves"
                />
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className={`text-7xl md:text-6xl ${berkshire.className} text-white overflow-hidden`}>Septi<br />& Nopri</h1>
                </div>
                <div className={`${worksans.className} flex flex-col gap-3`}>
                    <div>
                        <p className="text-white text-sm p-0 mb-0">Kepada Yth.</p>
                        <p className={`text-2xl text-white p-0 mb-0 font-semibold`}>{props.guest}</p>
                    </div>
                    <a href="#hero">
                        <button className="bg-white font-semibold flex gap-2 p-2 rounded-md w-max">
                            <Image
                                src={"/img/septi-nopri/envelope.svg"}
                                width={20}
                                height={20}
                                alt="Envelope"
                            />
                            Buka Undangan
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GreetingPopUp
