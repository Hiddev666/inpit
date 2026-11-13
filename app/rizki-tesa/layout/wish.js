'use client'

import Image from "next/image"
import { Berkshire_Swash, Work_Sans, Cormorant, Gabarito, Sofia, Instrument_Serif } from "next/font/google"
import axios from "axios"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)
const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const sofia = Sofia({
    subsets: ["latin"],
    weight: ["400"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
})

const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})

const gabarito = Gabarito({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
})

const Wish = () => {

    const apiEndPoint = "https://api-inpit.vercel.app/api/v1/wishes"
    const invitationId = "6af75a99738dbc7ec4217f57"
    const [wishes, setWishes] = useState([])
    const [wishDialog, setWishDialog] = useState(true)
    const [guestName, setGuestName] = useState("")
    const [message, setMessage] = useState("")


    useEffect(() => {
        getWish()
    })

    const getWish = async () => {
        await axios.get(`${apiEndPoint}/${invitationId}`)
            .then((res) => {
                setWishes(res.data.data)
            })
    }

    const postWish = async () => {
        await axios.post(`${apiEndPoint}`, {
            guestName: guestName,
            message: message,
            invitationId: invitationId
        }).then((res) => {
            console.log(res.data.message)
        })
    }

    const wishDialogState = () => {
        if (wishDialog == true) {
            setWishDialog(false)
        } else {
            setWishDialog(true)
        }
    }

    return (
        <div className="w-full p-10 flex flex-col items-center gap-10 bg-white" id="wish">
            <h1 className={`text-4xl ${sofia.className} overflow-hidden font-semibold text-[#672421]`}>Kirim Ucapan</h1>
            <form className={`w-full flex flex-col items-center justify-center gap-3 ${instrumentSerif.className} tracking-wide`} onSubmit={postWish}>
                <input type="text" name="name" className="border-1 border-[#505050] w-full p-2 px-4 rounded" placeholder="Nama Anda" onChange={(e) => setGuestName(e.target.value)}/>
                <textarea type="text" name="name" className="border-1 border-[#505050] w-full p-2 px-4 rounded" placeholder="Tulis ucapan di sini!" rows={8} onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <button type="submit" className="bg-[#672421] w-full p-2 rounded-md font-semibold text-white">Kirim</button>
            </form>
            <div className={`flex w-full justify-between ${instrumentSerif.className} tracking-wide`}>
                <p className="text-sm font-medium">{wishes.length} Ucapan</p>
                <button className="text-xs p-2 cursor-pointer bg-gray-100 rounded" onClick={wishDialogState}>{wishDialog ? "Sembunyikan": "Tampilkan"}</button>
            </div>
            {wishDialog && (
                <div className={`w-full ${instrumentSerif.className} tracking-wide flex flex-col gap-3`}>
                    {wishes.map((wish) => (
                        <div className="w-full flex" key={wish._id}>
                            <div className="w-1/7">
                                <div className="bg-[#8F1515] rounded-full w-[40px] h-[40px] flex justify-center items-center">
                                    <p className="font-semibold text-white">{wish.guestName[0]}</p>
                                </div>
                            </div>
                            <div className="w-6/7 w-maxborder-1 border-gray-200 p-3 bg-gray-100 flex flex-col gap-3" id="bubble-left">
                                <div className="flex justify-between">
                                    <p className="text-md font-semibold">{wish.guestName}</p>
                                    <div className="flex gap-1 item-center">
                                        <Image
                                            src={"/img/septi-nopri/date-icon.svg"}
                                            width={15}
                                            height={15}
                                            alt="Date"
                                        />
                                        <p className="text-sm">{dayjs(wish.createdAt).fromNow()}</p>
                                    </div>
                                </div>
                                <p className={`${gabarito.className} text-sm`}>{wish.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Wish
