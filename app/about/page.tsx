import Link from "next/link"
export default function About() {
    return (
        <>
            <h1>About</h1>
            <Link href={"/about/artikel"}>Artikel</Link>
        </>
    )
}