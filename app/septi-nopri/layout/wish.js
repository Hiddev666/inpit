'use client'

import Image from "next/image"
import { Berkshire_Swash, Work_Sans } from "next/font/google"
import axios from "axios"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)
const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

const Wish = () => {

    const apiEndPoint = "https://api-inpit.vercel.app/api/v1/wishes"
    const invitationId = "67eac70c4d9390ae30843074"
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
            <h1 className={`text-4xl ${berkshire.className} overflow-hidden`}>Kirim Ucapan</h1>
            <form className={`w-full flex flex-col items-center justify-center gap-3 ${worksans.className}`} onSubmit={postWish}>
                <input type="text" name="name" className="border-1 border-[#505050] w-full p-2 px-4 rounded-md" placeholder="Nama Anda" onChange={(e) => setGuestName(e.target.value)}/>
                <textarea type="text" name="name" className="border-1 border-[#505050] w-full p-2 px-4 rounded-md" placeholder="Tulis ucapan di sini!" rows={8} onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <button type="submit" className="bg-[#566E51] w-full p-2 rounded-md font-semibold text-white">Kirim</button>
            </form>
            <div className={`flex w-full justify-between ${worksans.className}`}>
                <p className="text-sm font-medium">{wishes.length} Ucapan</p>
                <button className="text-xs p-2 cursor-pointer bg-gray-100 rounded" onClick={wishDialogState}>{wishDialog ? "Sembunyikan": "Tampilkan"}</button>
            </div>
            {wishDialog && (
                <div className={`w-full ${worksans.className} flex flex-col gap-3`}>
                    {wishes.map((wish) => (
                        <div className="w-full flex" key={wish._id}>
                            <div className="w-1/7">
                                <div className="bg-[#566E51] rounded-full w-[40px] h-[40px] flex justify-center items-center">
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
                                <p className={`${worksans.className} text-sm`}>{wish.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Wish
