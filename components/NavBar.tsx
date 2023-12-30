"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navList = [
    {
        url: "/",
        nama: "Home"
    },
    {
        url: "/about",
        nama: "About"
    },
    {
        url: "/users",
        nama: "Users"
    },
    {
        url: "/clientComp",
        nama: "ClientComp"
    },
    {
        url: "/todo",
        nama: "Todo"
    },
    {
        url: "/expanse-tracker",
        nama: "Tracker"
    },
]

const NavBar = () => {
    const pathname = usePathname();
    return (
        <>
            <nav className="px-24 bg-blue-950 text-white space-x-6 py-6">
                {navList.map(nl => (
                    <Link key={nl.nama} href={nl.url} className={`${pathname == nl.url ? "text-yellow-200": ""}`} >{nl.nama}</Link>
                ))}
            </nav>
        </>
    )
}

export default NavBar
