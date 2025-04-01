import { Berkshire_Swash, Work_Sans } from "next/font/google"
import Image from "next/image"

const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

const Footer = () => {
    return (
        <div className="px-10 py-5 w-full bg-[#566E51] flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <p className={`${worksans.className} text-xs text-white`}>Made With &#10084; by</p>
                <Image
                    src={"/img/inpit-logo.svg"}
                    width={50}
                    height={50}
                    alt="Inpit Logo"
                />
            </div>
            <a href="https://api.whatsapp.com/send?phone=6289675731987">
                <Image
                    src={"/img/wa.svg"}
                    width={15}
                    height={15}
                    alt="Inpit Logo"
                    className="cursor-pointer"
                />
            </a>
        </div>
    )
}

export default Footer
