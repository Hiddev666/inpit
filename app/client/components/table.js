'use client'
import { Berkshire_Swash, Work_Sans } from "next/font/google"
import { useState, useEffect } from "react"
import axios from "axios"
import Image from "next/image"

const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

const Table = (props) => {


    const [guests, setGuests] = useState([])

    useEffect(() => {
        getGuest()
    })


    const getGuest = async () => {
        await axios.get(`https://api-inpit.vercel.app/api/v1/guests/${props.invitationId}`)
            .then((res) => {
                setGuests(res.data.data)
                console.log(res.data.data)
            })
    }

    const copyInvitation = (name, link) => {
        let message = `Bissmillahirrahmanirrahim
Assalamualaikum Warahmatullahi Wabarakatuh
Kepada Yth:
${name}

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara kami.

Septi Kurnia, S.Pd., Gr.
dengan
Ari Nopriansah

Untuk Info Detail Acara, Lokasi, dan Waktu Lebih Lengkap bisa akses link undangan online berikut :
${link}

Merupakan Suatu Kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Rekan-rekan berkenan hadir dan memberikan doa restu di acara pernikahan kami.

Karena keterbatasan jarak dan waktu tidak dapat mengirimkan undangan ini secara langsung, maka melalui e-invitation ini dapat menjadi pengganti undangan resmi sehingga tujuan kami tersampaikan.

Hormat Kami yang berbahagia
Septi dan Nopri

Wassalamualaikum Warahmatullahi Wabarakatuh`
        navigator.clipboard.writeText(message)
        alert("Copied")
    }

    const deleteGuest = async (id) => {
        await axios.delete(`https://api-inpit.vercel.app/api/v1/guests/${id}`).then((res) => {
            console.log(res.data.message)
        })
    }

    return (
        <div className={`${worksans.className} flex flex-col gap-3 p-5 border-1 border-gray-200 rounded-md`}>
            <div className="flex flex-col overflow-hidden">
                <p className="text-3xl font-semibold overflow-hidden">Septi & Nopri</p>
                <p className="">{guests.length} Guests</p>
            </div>
            <div className="w-full bg-gray-100 flex justify-around items-center p-3 font-medium">
                <div className="w-1/2">Name</div>
                <div className="w-1/2 text-center">Action</div>
            </div>
            {guests.map((guest) => (
                <div className="w-full flex justify-around items-center px-3" key={guest._id}>
                    <div className="w-1/2 text-sm">{guest.guestName}</div>
                    <div className="w-1/2 flex justify-center gap-2">
                        <button className="cursor-pointer bg-green-800 rounded-md p-2 text-xs text-white" onClick={() => copyInvitation(guest.guestName, guest.url)}>
                            <Image
                                src={"/img/copy-icon.svg"}
                                width={15}
                                height={15}
                                alt="copy"
                            />
                        </button>
                        <button className="cursor-pointer bg-red-800 rounded-md p-2 text-xs text-white" onClick={() => deleteGuest(guest._id)}>
                            <Image
                                src={"/img/delete-icon.svg"}
                                width={15}
                                height={15}
                                alt="copy"
                            />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Table
