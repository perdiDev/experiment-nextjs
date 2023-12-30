import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "User",
    description: "User Page"
}

export default function Users() {
    return(
        <> 
            <h1>List of User</h1>
            <ul>
                <li>
                    <Link href="users/john" >john</Link>
                </li>
                <li>
                    <Link href="users/alex" >Alex</Link>
                </li>
                <li>
                    <Link href="users/ali" >Ali</Link> 
                </li>
            </ul>
        </>
    )
}