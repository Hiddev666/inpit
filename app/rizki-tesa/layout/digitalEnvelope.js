import Image from "next/image";
import {
    Berkshire_Swash,
    Work_Sans,
    Cormorant,
    Gabarito,
    Instrument_Serif,
    Sofia,
} from "next/font/google";

const cormorant = Cormorant({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const sofia = Sofia({
    subsets: ["latin"],
    weight: ["400"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
});

const gabarito = Gabarito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const DigitalEnvelope = () => {
    return (
        <div
            className="w-full p-10 flex flex-col items-center gap-10 bg-[#672421] relative"
            id="gallery"
        >
            {/* Backround Pattern */}
            <Image
                src={"/img/rizki-tesa/background-pattern.svg"}
                width={200}
                height={200}
                className="absolute left-0 top-0 h-full w-full object-cover z-0"
            />
            <p
                className={`text-4xl text-white p-2 ${sofia.className} overflow-hidden`}
            >
                Amplop Digital
            </p>
            <div className="w-full flex flex-col justify-center gap-4">
                <div
                    className="bg-white p-4 rounded-lg flex flex-col gap-5"
                    data-aos="flip-up"
                >
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
                    <p
                        className={`${gabarito.className} text-2xl font-semibold text-[#202020]`}
                    >
                        1120019249213
                    </p>
                    <div className={`flex flex-col ${gabarito.className}`}>
                        <p className="text-sm">Atas Nama</p>
                        <p className="font-semibold">TESA AMELIA</p>
                    </div>
                </div>
                <div
                    className="bg-white p-4 rounded-lg flex flex-col gap-5"
                    data-aos="flip-up"
                >
                    <div className="flex justify-between">
                        <Image
                            src={"/img/rizki-tesa/bni.png"}
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
                    <p
                        className={`${gabarito.className} text-2xl font-semibold text-[#202020]`}
                    >
                        1910861662
                    </p>
                    <div className={`flex flex-col ${gabarito.className}`}>
                        <p className="text-sm">Atas Nama</p>
                        <p className="font-semibold">RIZKI PILIYANG</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalEnvelope;
