import Link from 'next/link'

export default function Home() {
  return (
      <>
          <nav className="bg-red-500">
                <Link href="/Donation">Doações</Link>
            </nav>
            <main>
                <h1>HOME</h1>
          </main>
      </>
  )
}
