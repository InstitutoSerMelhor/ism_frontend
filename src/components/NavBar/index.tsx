'use client'
import React, { Dispatch, SetStateAction, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import RouterLinks from './RouterLinks';
import Link from 'next/link';

type RouterProps = {
    beTransparent: boolean, 
    setCanBlur?: Dispatch<SetStateAction<boolean>>, 
};

const NavBar = ({ beTransparent, setCanBlur = () => {}}: RouterProps) => {
    const [isToggle, setIsToggle] = useState(false);

    const toggleMenu = () => {
        setCanBlur(!isToggle);
        setIsToggle(!isToggle);
    }

    return (
        <header className={`${beTransparent ? '' : 'bg-[#172554]'} lg:py-[1.10rem] py-5`}>
            <nav className=' flex lg:justify-between justify-end items-center w-[92%] mx-auto pr-1'>
                <ul className={`${isToggle ? 'top-[9%]' : 'top-[-100%]'} ${beTransparent ? '' : 'bg-[#172554]'} lg:static duration-500 absolute lg:min-h-fit min-h-[60vh] left-0 lg:translate-x-[18%] lg:w-auto w-full mx-auto flex items-center px-5`}>
                    <div className={`${beTransparent ? '' : 'bg-[#172554]'} flex lg:flex-row flex-col lg:items-center items-center lg:gap-[4vw] gap-8 text-white w-full`}>
                        <RouterLinks route='/' title='Home' />
                        <RouterLinks route='/JoinUs' title='Junte-se a nós' />
                        <RouterLinks route='/About' title='Sobre nós' />
                        <RouterLinks route='/About/Transparence' title='Transparência' />
                        <div className='flex lg:flex-row flex-col items-center gap-8 lg:ml-16'>
                            {/* <RouterLinks route='/SignIn' title='Login' />    */}
                            <Link href="#donate-now" className='bg-[#F88D12] text-base text-white px-8 py-2 rounded-[8px]'>
                                Doar Agora
                            </Link>  
                        </div>
                    </div>
                </ul>

                {isToggle 
                    ? <FaXmark onClick={toggleMenu} className='text-4xl text-white cursor-pointer lg:hidden' />
                    : <FaBars onClick={toggleMenu} className='text-4xl text-white cursor-pointer lg:hidden' />}
            </nav>
        </header>
    )
}

export default NavBar;