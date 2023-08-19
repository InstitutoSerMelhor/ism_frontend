import React, { FormEventHandler } from 'react'
import ism_logo from '@/assets/ism_logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const SignInPage = () => {


  return (
    <div className='flex flex-col items-center w-full my-8'>
      <div className='p-6 bg-slate-100 w-2/6 rounded-md shadow-md'>
        <Image src={ism_logo} width={100} alt='Logo do Instituto Ser Melhor' />
        <small >Digite seu usuário e Senha para acessar a plataforma</small>
        <form className='flex flex-col my-2 gap-2' method='POST'>
          <label className='text-xs text-gray-500' htmlFor="email">
            Email
          </label>
          <input className='p-1.5' id='email' type="email" placeholder='usuario@dominio.com' required />
          <label className='text-xs text-gray-500' htmlFor="password">
            Senha
          </label>
          <input className='p-1.5' id='password' type="password" placeholder='*******' required />
          <button className='p-2 my-2 bg-blue-900 text-white text-sm rounded-md' type='submit'>
            Entrar
          </button>
          <button className='p-2 border-2 border-blue-900 bg-transparent text-blue-900 text-sm rounded-md'>
            Não tenho Cadastro
          </button>
          <Link className='mt-4 text-center text-sm hover:underline text-blue-900 ' href={'#'}>Esqueceu sua senha?</Link>
        </form>
      </div>

    </div>
  )
}

export default SignInPage