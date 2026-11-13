import Image from "next/image"
import { Berkshire_Swash, Work_Sans } from "next/font/google"
import BraidGroomCard from "../components/BraidGroomCard"

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
        <div className="w-full flex flex-col items-center gap-10 bg-white py-10" id="braidgroom">
            <BraidGroomCard
                image="braid"
                name="Tesa Amelia, S.M"
                detail="Putri Ketiga dari Bapak Marhansi dan Ibu Mulyati"
            />
            <BraidGroomCard
                image="groom"
                name="Rizki Piliyang"
                detail="Putra Pertama Dari Bapak Ismail Ibu Sumawati"
            />
        </div>
    )
}

export default BraidGroom
