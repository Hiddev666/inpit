import Image from "next/image";
import {
    Berkshire_Swash,
    Work_Sans,
    Cormorant,
    Gabarito,
    Sofia,
    Instrument_Serif
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
})

const gabarito = Gabarito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const LoveStory = () => {
    return (
        <div
            className="w-full p-10 flex flex-col items-center gap-10 bg-white"
            id="lovestory"
        >
            <h1
                className={`text-4xl ${sofia.className} overflow-hidden font-semibold text-[#672421]`}
            >
                Our Love Story
            </h1>
            <div className="w-full flex flex-col gap-5">
                <div className="flex gap-2">
                    <div className="">
                        <Image
                            src={"/img/rizki-tesa/braid-profile.svg"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full w-50 h-min"
                            data-aos="zoom-in-right"
                        />
                    </div>
                    <div
                        className="border-1 border-gray-200 p-3 bg-gray-100"
                        id="bubble-left"
                        data-aos="zoom-in-right"
                        data-aos-delay="300"
                    >
                        <p className={`tracking-wider ${instrumentSerif.className} text-base`}>
                            Pada awalnya, kami adalah dua orang asing yang berjalan di
                            jalannya masing-masing. Tak saling kenal, tak saling sapa. Hingga
                            semesta dengan caranya yang indah, mempertemukan kami di satu
                            titik yang sama.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div
                        className="border-1 border-gray-200 p-3 bg-gray-100"
                        id="bubble-right"
                        data-aos="zoom-in-right"
                        data-aos-delay="300"
                    >
                        <p className={`tracking-wider ${instrumentSerif.className} text-base`}>
                            Percakapan sederhana menjadi tawa yang panjang. Tawa yang panjang
                            menjadi nyaman yang menetap. Dan nyaman itu pelan-pelan berubah
                            menjadi cinta yang tak kami rencanakan. Kami belajar bahwa cinta
                            bukan tentang seberapa cepat ia datang, tapi tentang seberapa
                            yakin ia tinggal.
                        </p>
                    </div>
                    <div className="">
                        <Image
                            src={"/img/rizki-tesa/groom-profile.svg"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full w-50 h-min"
                            data-aos="zoom-in-right"
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="">
                        <Image
                            src={"/img/rizki-tesa/braid-profile.svg"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full w-50 h-min"
                            data-aos="zoom-in-right"
                        />
                    </div>
                    <div
                        className="border-1 border-gray-200 p-3 bg-gray-100"
                        id="bubble-left"
                        data-aos="zoom-in-right"
                        data-aos-delay="300"
                    >
                        <p className={`tracking-wider ${instrumentSerif.className} text-base`}>
                            Dan kini, setelah melalui waktu, doa, dan restu, kami yakin bahwa
                            pertemuan ini bukan kebetulan. Ini adalah Jawaban dari doa-doa
                            yang kami langitkan diam-diam. Dengan memohon ridho Allah SWT.
                            kami memutuskan untuk menyempurnakan separuh agama, dan melangkah bersama dalam satu tujuan: ibadah terpanjang.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoveStory;
