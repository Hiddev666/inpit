import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Berkshire_Swash, Work_Sans } from "next/font/google"

const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

const images = [
    "/img/septi-nopri/carousel1.png",
    "/img/septi-nopri/carousel2.png",
    "/img/septi-nopri/carousel3.png",
    "/img/septi-nopri/carousel4.png",
    "/img/septi-nopri/carousel5.png",
    "/img/septi-nopri/carousel6.png",
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
        <div className="w-full p-10 flex flex-col items-center gap-10  bg-[url(/img/septi-nopri/blured.png)] bg-cover bg-top" id="gallery">
            <h1 className={`text-white text-6xl ${berkshire.className} overflow-hidden`}>Galeri</h1>
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

                <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full">
                    <ChevronLeft size={24} />
                </button>

                <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}

export default Gallery
