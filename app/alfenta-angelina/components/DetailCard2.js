import { Berkshire_Swash, Work_Sans, Cormorant, Gabarito } from "next/font/google"
import Image from "next/image"

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})

const gabarito = Gabarito({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
})


const DetailCard2 = (props) => {

    const generateCoundown = (time) => {
        var countDownDate = new Date(time).getTime();
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        return days != 0 ? `${days} Hari Lagi` : "Selesai"

    }

    return (
        <div className={`w-full bg-white p-6 rounded-md bg-[url(/img/alfenta-angelina/bg-card-2.png)] bg-cover bg-top h-100 flex flex-col justify-between`} data-aos="fade-up">
            <div className="bg-white w-fit p-1 rounded px-2 font-medium" data-aos="flip-up" data-aos-delay="500" >
                <p className={`text-xs ${gabarito.className}`}>{generateCoundown(props.time)}</p>
            </div>
            <div className="text-white flex flex-col gap-2">
                <h1 className={`${cormorant.className} text-4xl overflow-y-hidden scrollbar-hide`}>{props.title}</h1>
                <div className="flex flex-col gap-1">
                    <p className={`${gabarito.className} text-sm font-semibold`}>{props.date}</p>
                    <p className={`${gabarito.className} text-sm leading-4 text-justify`}>{props.address}</p>
                </div>
                <a href={props.map} className="w-full">
                    <div className={`${gabarito.className} text-sm font-semibold text-[#404040] bg-white flex gap-2 justify-center rounded-sm py-2`} data-aos="flip-up">
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
    )
}

export default DetailCard2
