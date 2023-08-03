import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ism_logo from '../../assets/ism_logo.svg'

const NavBar = () => {
    return (
        <nav className='bg-blue-950 h-16 '>
            <ul className='flex flex-row items-center justify-between h-full p-4'>
                <Image src={ism_logo} width={140} alt='Logo do Instituto ISM' />
                <div className='flex flex-row items-center gap-6 '>
                    <li>
                        <Link className='text-white text-sm font-light' href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className='text-white text-sm font-light' href="/JoinUs">Junte-se a nós</Link>
                    </li>
                    <li>
                        <Link className='text-white text-sm font-light' href={'/About'}>Sobre nós</Link>
                    </li>
                    <li>
                        <Link className='text-white text-sm font-light' href={'/News'}>Notícias</Link>
                    </li>
                    <li>
                        <Link className='text-white text-sm font-light' href={'/Contact'}>Contato</Link>
                    </li>
                    <li>
                        <Link className='text-white text-sm font-light' href={'/signin'}>Login</Link>
                    </li>
                    <li>
                        <button className='h-10 w-32 bg-green-600 rounded-lg text-sm text-white font-light'>Doar Agora</button>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar