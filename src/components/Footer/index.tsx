import Link from 'next/link'
import React from 'react'

const Footer = () => {

    return (
        <div className='flex flex-row justify-between bg-blue-950 p-8'>
            <div className='flex flex-col gap-1'>
                <p className='text-white mb-1 text-sm'>Redes Sociais</p>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'>Instagram</Link>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'>Linkedin</Link>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-white mb-1 text-sm'>Navegação</p>
                <Link href={'/'} className='text-gray-200 text-xs hover:underline'>Home</Link>
                <Link href={'/JoinUs'} className='text-gray-200 text-xs hover:underline'>Junte-se a Nós</Link>
                <Link href={'/AboutUs'} className='text-gray-200 text-xs hover:underline'>Sobre Nós</Link>
                <Link href={'/News'} className='text-gray-200 text-xs hover:underline'>Notícias</Link>
                <Link href={'/Contact'} className='text-gray-200 text-xs hover:underline'>Contato</Link>
                <Link href={'/SignIn'} className='text-gray-200 text-xs hover:underline'>Login</Link>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-white mb-1 text-sm'>Fale Conosco</p>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'>Fixo: (xx) xxxxx-xxxx</Link>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'>Whatsapp: (xx) xxxx-xxxx</Link>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'> 0800-xxxx</Link>
            </div>

            <div className='flex flex-col gap-1'>
                <p className='text-white mb-1 text-sm'>Suporte</p>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'>Plataforma</Link>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'>Ações Sociais</Link>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'> Criança e Adolescente</Link>
            </div>

            <div className='flex flex-col gap-1'>
                <p className='text-white mb-1 text-sm'>Doações</p>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'>Doação via Pix</Link>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'>Doação Online</Link>
                <Link href={'#'} className='text-gray-200 text-xs hover:underline'> Contas Bancárias</Link>
            </div>
        </div>
    )
}

export default Footer