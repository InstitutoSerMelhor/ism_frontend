'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import RouterLinks from './RouterLinks'

type RouterProps = {
    beTransparent: boolean, 
    setCanBlur: Dispatch<SetStateAction<boolean>>, 
};

const NavBar = ({ beTransparent, setCanBlur }: RouterProps) => {
    const [isToggle, setIsToggle] = useState(false);

    const toggleMenu = () => {
        setCanBlur(!isToggle);
        setIsToggle(!isToggle);
    }

    return (
        <header className={`${beTransparent ? '' : 'bg-white'}`}>
            <nav className=' flex md:justify-between justify-end items-center w-[92%] mx-auto md:pt-5 pt-6 pr-1'>
                <ul className={`${isToggle ? 'top-[9%]' : 'top-[-100%]'} md:static duration-500 absolute md:min-h-fit min-h-[60vh] left-0 md:translate-x-[18%] md:w-auto w-full mx-auto flex items-center px-5`}>
                    <div className='flex md:flex-row flex-col md:items-center items-center md:gap-[4vw] gap-8 text-white w-full'>
                        <RouterLinks route='/' title='Home' />
                        <RouterLinks route='/JoinUs' title='Junte-se a nós' />
                        <RouterLinks route='/About' title='Sobre nós' />
                        <RouterLinks route='/News' title='Notícias' />
                        <RouterLinks route='/Contact' title='Contato' />
                        <div className='flex md:flex-row flex-col items-center gap-8 md:ml-16'>
                            <RouterLinks route='/SignIn' title='Login' />   
                            <button className='bg-[#F88D12] text-base text-white px-8 py-2 rounded-[8px]'>
                                Doar Agora
                            </button>  
                        </div>
                    </div>
                </ul>

                {isToggle 
                    ? <FaXmark onClick={toggleMenu} className='text-4xl text-white cursor-pointer md:hidden' />
                    : <FaBars onClick={toggleMenu} className='text-4xl text-white cursor-pointer md:hidden' />}
            </nav>
        </header>
    )
}

export default NavBar;