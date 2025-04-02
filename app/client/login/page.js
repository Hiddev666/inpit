'use client'

import { useState } from "react"
import Image from "next/image"
import { Berkshire_Swash, Work_Sans } from "next/font/google"
import axios from "axios"
import { redirect } from "next/navigation"
import { setCookie } from "cookies-next"

const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: "400"
})

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})


const Login = () => {

    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState([])

    const login = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://api-inpit.vercel.app/api/v1/auth/login", {
                phone,
                password
            }).then(res => {
                const token = res.data;
                setToken(token.data)
                setCookie("token", token.data.token);
            })
        } catch (error) {
            console.log(error);
        }
        redirect("/client")
    }

    return (
        <>
            <div className={`flex justify-center h-screen items-center w-full ${worksans.className}`}>
                <div className="w-md relative bg-white flex flex-col justify-between p-5 gap-5 rounded-md border-1 border-gray-300">
                    <div className="w-full flex justify-center items-center">
                        <div className="bg-neutral-900 w-full rounded-md">
                            <Image
                                src={"/img/inpit-logo.svg"}
                                width={90}
                                height={90}
                                alt="Inpit Logo"
                                className="bg-neutral-900 p-3 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-5">
                        <p className="text-3xl font-semibold">Login.</p>
                        <form className="flex flex-col gap-2" onSubmit={login}>
                            <input type="text" name="phone" className="border-1 border-[#505050] w-full p-2 px-4 rounded-md" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                            <input type="password" name="password" className="border-1 border-[#505050] w-full p-2 px-4 rounded-md" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <button className="p-2 cursor-pointer bg-neutral-900 cursor-pointer text-white font-semibold rounded w-full">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
