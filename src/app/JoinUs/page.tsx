import React from 'react'
import ism_logo from '@/assets/ism_logo.svg'
import Image from 'next/image'

const JoinUs = () => {
    return (
        <div className='flex flex-row justify-between'>
            <Image src={ism_logo} alt="" width={300} />
            <div className='p-4 w-5/12 mr-8'>
                <h2 className='text-lg'>Junte-se a Nós</h2>
                <small className='text-gray-700'>Seja um voluntário do Instituto Ser Melhor</small>
                <form className='flex flex-col my-2 gap-2' method='POST' action="">
                    <label className='text-xs text-gray-500' htmlFor="name">Nome Completo</label>
                    <input className='p-1.5 border-2 border-gray-200 rounded-md' id='name' type="text" placeholder='Nome Completo' />
                    <label className='text-xs text-gray-500' htmlFor="email">Email</label>
                    <input className='p-1.5 border-2 border-gray-200 rounded-md' id='email' type="email" placeholder='seuemail@dominio.com' />
                    <label className='text-xs text-gray-500' htmlFor="textarea">
                        Diga em poucas palavras, como você poderia ajudar
                        o Instituto Ser Melhor
                    </label>
                    <textarea className='p-2 border-2 border-gray-200 rounded-md' name="" id="textarea" cols={15} rows={3} />
                    <button className='p-2 my-2 bg-blue-900 text-white text-sm rounded-md' type='submit'>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default JoinUs