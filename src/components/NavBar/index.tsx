'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
// import ism_logo from '../../assets/ism_logo.svg'
import RouterLinks from './RouterLinks'


const NavBar = () => {
    const [isToggle, setIsToggle] = useState(false);

    const toggleMenu = () => {
        setIsToggle(!isToggle);
    }

    return (
        <header className='bg-white'>
            <nav className=' flex justify-between items-center w-[92%] mx-auto py-3'>

                <div className={`md:static duration-500 absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${isToggle ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-[#0038AA]'>
                        <RouterLinks route='/' title='Home' />
                        <RouterLinks route='/JoinUs' title='Junte-se a nós' />
                        <RouterLinks route='/About' title='Sobre nós' />
                        <RouterLinks route='/News' title='Notícias' />
                        <RouterLinks route='/Contact' title='Contato' />
                        
                    </ul>
                </div>

                <div className='flex items-center gap-6 text-[#0038AA]'>
                    <RouterLinks route='/SignIn' title='Login' />
                    <button className='bg-[#F88D12] text-white px-5 py-2 rounded-lg'>Doa Agora</button>          
                    {
                        isToggle 
                        ? <FaXmark onClick={toggleMenu} className='text-3xl cursor-pointer md:hidden' />
                        : <FaBars onClick={toggleMenu} className='text-3xl cursor-pointer md:hidden' />
                    }
                </div>

            </nav>
        </header>
    )
}
// // a qualidade da Logo não está boa, por isso tive que redimensionar ela toda na tag Image.
// const NavBar = () => {
//     return (
//         <nav className='bg-blue-950 h-16 '>
//             <ul className='flex flex-row items-center justify-between h-full p-4'>
//                 <Image className='mt-9' src={ism_logo} width={180} alt='Logo do Instituto ISM' />
//                 <div className='flex flex-row items-center gap-6 '>
//                     <RouterLinks route='/' title='Home' />
//                     <RouterLinks route='/JoinUs' title='Junte-se a nós' />
//                     <RouterLinks route='/About' title='Sobre nós' />
//                     <RouterLinks route='/News' title='Notícias' />
//                     <RouterLinks route='/Contact' title='Contato' />
//                     <RouterLinks route='/SignIn' title='Login' />
//                     <li>
//                         <button className='h-10 w-32 bg-green-600 rounded-lg text-xs text-white font-light hover:bg-green-900 transition-all duration-150'>
//                             Doar Agora
//                         </button>
//                     </li>
//                 </div>
//             </ul>
//         </nav>
//     )
// }

export default NavBar;