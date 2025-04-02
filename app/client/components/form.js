'use client'
import { Berkshire_Swash, Work_Sans } from "next/font/google"
import { useState } from "react"
import axios from "axios"

const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

const Form = (props) => {

    const [guestName, setGuestName] = useState("")

    const postGuest = async () => {
        await axios.post(`https://api-inpit.vercel.app/api/v1/guests`, {
            guestName: guestName,
            url: `https://inpit.vercel.app/septi-nopri?to=${guestName.replaceAll(" ", "%20")}`,
            invitationId: props.invitationId
        }).then((res) => {
            console.log(res.data.message)
        })
    }

    return (
        <div className={`${worksans.className} flex flex-col gap-3`}>
            <input type="text" name="name" className="border-1 border-[#505050] w-full p-2 px-4 rounded-md" placeholder="Nama Tamu" onChange={(e) => setGuestName(e.target.value)} />
            <button onClick={postGuest} className="p-2 cursor-pointer bg-neutral-900 cursor-pointer text-white font-semibold rounded w-full">Buat</button>
        </div>
    )
}

export default Form
