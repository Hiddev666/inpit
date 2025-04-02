'use client'

import Form from "./components/form"
import Image from "next/image"
import Table from "./components/table"
import { getCookie } from "cookies-next"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import axios from "axios"
import { Berkshire_Swash, Work_Sans } from "next/font/google"

const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

const Client = () => {

    const [token, setToken] = useState("")
    const [userLogin, setUserLogin] = useState([])
    const [invitation, setInvitation] = useState([])

    useEffect(() => {
        getCook();
    }, [])

    useEffect(() => {
        if (token) { // Pastikan token sudah ada sebelum getInvitation() dipanggil
            getInvitation();
        }

    }, [token]);

    const getCook = async () => {
        const jwt = await getCookie("token")
        if (jwt != undefined) {
            const jwtDecoded = jwtDecode(jwt)
            setUserLogin(jwtDecoded)
            setToken(jwt)
        } else {
            redirect("/client/login")
        }
    }

    const getInvitation = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.get(`https://api-inpit.vercel.app/api/v1/invitations/${userLogin.userId}`)
            .then((res) => {
                setInvitation(res.data.data)
            })
    }


    return (
        <div className={`flex flex-col items-center w-full ${worksans.className}`}>
            <div className="w-md relative bg-white flex flex-col justify-between p-10 gap-10">
                <div className="w-full flex justify-center items-center">
                    <div className="bg-neutral-900 w-full rounded-md flex justify-between items-center px-3">
                        <Image
                            src={"/img/inpit-logo.svg"}
                            width={90}
                            height={90}
                            alt="Inpit Logo"
                            className="bg-neutral-900 p-3 rounded-md"
                        />
                        <p className="text-white font-medium">Invitation Generator</p>
                    </div>
                </div>
                <Form invitationId={invitation._id} />
                <Table invitationId={invitation._id} />
            </div>
        </div>
    )
}

export default Client
