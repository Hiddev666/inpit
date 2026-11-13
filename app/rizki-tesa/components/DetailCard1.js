import {
    Berkshire_Swash,
    Work_Sans,
    Cormorant,
    Gabarito,
    Sofia,
    Instrument_Serif
} from "next/font/google";
import Image from "next/image";

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

const DetailCard1 = (props) => {
    const generateCoundown = (time) => {
        var countDownDate = new Date(time).getTime();
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        return days != 0 ? `${days} Hari Lagi` : "Selesai";
    };

    return (
        <div
            className={`w-full p-7 bg-[url(/img/rizki-tesa/calendar-paper.svg)] bg-cover bg-top flex flex-col justify-between z-10 overflow-y-hidden`}
            data-aos="fade-up"
        >
            <Image
                src={props.image}
                width={200}
                height={200}
                className="w-full z-1 mt-9"
            />
            <div className="w-full flex flex-col text-start gap-3 mt-5">
                <h1 className={`${sofia.className} text-3xl font-bold p-2 text-[#672421]`}>{props.title}</h1>
                <div className="flex flex-col gap-1 px-2">
                    <p className={`${instrumentSerif.className} text-black text-base tracking-wide font-semibold`}>{props.date}</p>
                    <p className={`${instrumentSerif.className} text-black text-base tracking-wide`}>{props.address}</p>
                </div>
                <a href={props.map} className="w-full">
                    <div className={`${instrumentSerif.className} text-base tracking-wide font-semibold text-white bg-[#672421] flex gap-2 justify-center rounded-sm py-2`} data-aos="flip-up">
                        <Image
                            src={"/img/alfenta-angelina/location.svg"}
                            width={15}
                            height={15}
                            alt="Location"
                            data-aos="flip-up"
                        />
                        Buka Google Maps
                    </div>
                </a>
            </div>
        </div>
    );
};

export default DetailCard1;
