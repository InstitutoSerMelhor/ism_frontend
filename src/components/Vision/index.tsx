import React from 'react'
import Title from '../Title'
import Description from '../Description'
import livroNaMao from '../../assets/images/livro-na-mao.png'; 
import Image from 'next/image'

const Vision = () => {
  return (
    <section className='flex justify-center items-center mt-15 mb-20'>
        <Image
            width={300}
            height={300}
            src={livroNaMao}
            alt='Duas pessoas segurando um livro.'
            className='mx-16 md:flex hidden'
        />

        <section className='md:w-[60%] w-full flex flex-col justify-items h-[100%]'>
            <Title text='Visão' />
            <Description message='
                A educação é a base para uma sociedade justa. Desenvolvemos projetos que integram 
                todos os saberes necessários para o desenvolvimento intelectual das pessoas.' 
            />
        </section>
    </section>
  )
}

export default Vision
