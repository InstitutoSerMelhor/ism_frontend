import Link from 'next/link'

export default function Home() {
    return (
        <>
            <nav className="bg-red-500">
                <Link href="/Donation">Doações</Link>
            </nav>
            <main className="m-0 p-0" style={{ height: "75vh" }}>
                <h1>HOME</h1>
            </main>
        </>
    )
}
