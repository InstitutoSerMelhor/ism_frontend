import Header from '@/components/Header/Header'
import Link from 'next/link'

export default function Home() {
  return (
      <>
        <Header/>
        <nav className="bg-red-500 my-8">
            <Link href="/Donation">Doações</Link>
        </nav>
        <main>
            <h1>HOME</h1>
         </main>
      </>
  )
}
