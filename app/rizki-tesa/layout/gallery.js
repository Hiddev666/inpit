import Image from "next/image";
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Berkshire_Swash, Work_Sans, Cormorant, Gabarito, Sofia, Instrument_Serif } from "next/font/google"

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})

const sofia = Sofia({
    subsets: ["latin"],
    weight: ["400"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
})

const gabarito = Gabarito({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
})

const images = [
    "/img/rizki-tesa/carousel1.jpg",
    "/img/rizki-tesa/carousel2.jpg",
    "/img/rizki-tesa/carousel3.jpg",
    "/img/rizki-tesa/carousel4.jpg",
    "/img/rizki-tesa/carousel5.jpg",
    "/img/rizki-tesa/carousel6.jpg",
    "/img/rizki-tesa/carousel7.jpg",
    "/img/rizki-tesa/carousel8.jpg",
]

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Autoslide setiap 3 detik

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="w-full p-10 flex flex-col items-center gap-10 bg-[#672421] relative" id="gallery">
            {/* Backround Pattern */}
            <Image
                src={"/img/rizki-tesa/background-pattern.svg"}
                width={200}
                height={200}
                className="absolute left-0 top-0 h-full w-full object-cover z-0"
            />
            <h1 className={`text-white text-6xl p-2 ${sofia.className} overflow-hidden`}>Galeri</h1>
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
                <div className="relative h-120">
                    {images.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="absolute w-full h-full object-cover rounded-2xl"
                            initial={{ opacity: 0, x: index > currentIndex ? 100 : -100 }}
                            animate={{ opacity: index === currentIndex ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        />
                    ))}
                </div>

                <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50 text-black rounded-full">
                    <ChevronLeft size={24} />
                </button>

                <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50 text-black rounded-full">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}

export default Gallery
