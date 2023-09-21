'use client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import RouterLinks from './RouterLinks'

const NavBar = () => {
    const [isToggle, setIsToggle] = useState(false);

    const toggleMenu = () => setIsToggle(!isToggle);

    return (
        <header className='bg-white'>
            <nav className=' flex justify-between items-center w-[92%] mx-auto py-4'>
                <ul className={`${isToggle ? 'top-[9%]' : 'top-[-100%]'} md:static duration-500 absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:translate-x-[17%] md:w-auto w-full mx-auto flex items-center px-5`}>
                    <div className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-[#0038AA]'>
                        <RouterLinks route='/' title='Home' />
                        <RouterLinks route='/JoinUs' title='Junte-se a nós' />
                        <RouterLinks route='/About' title='Sobre nós' />
                        <RouterLinks route='/News' title='Notícias' />
                        <RouterLinks route='/Contact' title='Contato' />              
                    </div>
                </ul>
                <div className='flex items-center gap-6 text-[#0038AA]'>
                    <RouterLinks route='/SignIn' title='Login' />   
                    <button className='bg-[#F88D12] text-sm text-white px-8 py-3 rounded-[8px]'>
                        Doar Agora
                    </button>          
                </div>            
                {isToggle 
                    ? <FaXmark onClick={toggleMenu} className='text-3xl cursor-pointer md:hidden' />
                    : <FaBars onClick={toggleMenu} className='text-3xl cursor-pointer md:hidden' />}
            </nav>
        </header>
    )
}

export default NavBar;