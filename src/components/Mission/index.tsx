import Image from 'next/image'
import astronautPng from '../../assets/images/astronaut.png'; 
import React from 'react'
import Title from '../Title';
import Description from '../Description';

const Mission = () => {
  return (
      <section className='flex justify-center items-center md:pb-18'>
        <section className='md:w-[60%] w-full flex flex-col justify-center h-[100%]'>
            <Title text='Missão' />
            <Description message='
                Estamos empenhados em derrotar a ignorância, buscando conhecimento, criatividade e 
                iniciativas para combater a falta de respeito e o desconhecimento na sociedade.' 
            />
        </section>
      
        <Image
            width={300}
            height={300}
            src={astronautPng}
            alt='Duas pessoas segurando um livro.'
            className='lg:mx-16 sm:mx-10 sm:flex hidden'
        />
    </section>
  )
}

export default Mission
