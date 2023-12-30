import Image from "next/image"
import { redirect } from "next/navigation"

import profileImage from "@/public/profile.png"

export default function Username({params}: any) {
    if(params.username == "ali") {
        redirect("/login")
    }
    console.log(params)
    return (
        <>
            <Image src={profileImage} alt="Profile" width="100" height="100" />
            <h1>{params.username}</h1>
        </>
    )
}