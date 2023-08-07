import Image from 'next/image'
import React from 'react'
import ism_logo from '../../assets/ism_logo.svg'
import RouterLinks from './RouterLinks'

// a qualidade da Logo não está boa, por isso tive que redimensionar ela toda na tag Image.
const NavBar = () => {
    return (
        <nav className='bg-blue-950 h-16 '>
            <ul className='flex flex-row items-center justify-between h-full p-4'>
                <Image className='mt-9' src={ism_logo} width={180} alt='Logo do Instituto ISM' />
                <div className='flex flex-row items-center gap-6 '>
                    <RouterLinks route='/' title='Home' />
                    <RouterLinks route='/JoinUs' title='Junte-se a nós' />
                    <RouterLinks route='/About' title='Sobre nós' />
                    <RouterLinks route='/News' title='Notícias' />
                    <RouterLinks route='/Contact' title='Contato' />
                    <RouterLinks route='/SignIn' title='Login' />
                    <li>
                        <button className='h-10 w-32 bg-green-600 rounded-lg text-xs text-white font-light hover:bg-green-900 transition-all duration-150'>
                            Doar Agora
                        </button>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar