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

const LoveStory = () => {
    return (
        <div className="w-full p-10 flex flex-col items-center gap-10 bg-white" id="lovestory">
            <h1 className={`text-4xl ${berkshire.className} overflow-hidden`}>Our Love Story</h1>
            <div className="w-full flex flex-col gap-5">
                <div className="flex gap-2">
                    <div className="w-3/4 h-3/4">
                        <Image
                            src={"/img/septi-nopri/braid-profile.png"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full"
                        />
                    </div>
                    <div className="border-1 border-gray-200 p-3 bg-gray-100" id="bubble-left">
                        <p className={`${worksans.className} text-sm`}><span className="font-semibold">Pertemuan</span><br />Kami berkenalan pada september 2019 di media sosial. Sebenarnya awalnya sudah lama kenal,cuma sebatas kenal dan tau saja.
                            Hingga akhirnya ada kesepatan bertemu di event olahraga yang kami tekuni,kebetulan kami sama-sama mengikuti kejuaran olahraga tersebut pada bulan oktober 2019.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 justify-end w-full">
                    <div className="border-1 border-gray-200 p-3" id="bubble-right">
                        <p className={`${worksans.className} text-sm`}><span className="font-semibold">Pendekatan</span><br />
                            Kami semakin dekat satu sama lain. Seringkali bertukar cerita dan menghabiskan waktu bersama. Lambat laun, perasaan nyaman itu berubah menjadi sayang dan cinta yang tidak terduga.
                        </p>
                    </div>
                    <div className="w-3/4 h-3/4">
                        <Image
                            src={"/img/septi-nopri/groom-profile.png"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="w-3/4 h-3/4">
                        <Image
                            src={"/img/septi-nopri/braid-profile.png"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full"
                        />
                    </div>
                    <div className="border-1 border-gray-200 p-3 bg-gray-100" id="bubble-left">
                        <p className={`${worksans.className} text-sm`}><span className="font-semibold">Menjalin Hubungan</span><br />
                            Memutuskan untuk saling menyatakan perasaan adalah bagian dari perjalanan kisah kami. Berpacaran kurang lebih 5 tahun, tentu saja banyak terpaan badai permasalahan yang menghadang. Tapi kami berhasil melewatinya.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="border-1 border-gray-200 p-3" id="bubble-right">
                        <p className={`${worksans.className} text-sm`}><span className="font-semibold">Menikah</span><br />
                            Tahun 2025 menjadi langkah baru bagi kami untuk membina bahtera rumah tangga. Dengan keyakinan dan kepercayaan bahwa inilah takdir yang Tuhan anugerahkan. Kami sepakat untuk mengikat janji suci dalam biduk pernikahan
                        </p>
                    </div>
                    <div className="w-3/4 h-3/4">
                        <Image
                            src={"/img/septi-nopri/groom-profile.png"}
                            width={40}
                            height={40}
                            alt="Braid"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoveStory
