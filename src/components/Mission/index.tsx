import Image from 'next/image'
import livroNaMao from '../../assets/images/livro-na-mao.png'; 
import React from 'react'
import Title from '../Title';
import Description from '../Description';

const Mission = () => {
  return (
      <section className='flex justify-center items-center mb-15'>
        <section className='md:w-[60%] w-full flex flex-col justify-items h-[100%]'>
            <Title text='Missão' />
            <Description message='
                Estamos empenhados em derrotar a ignorância, buscando conhecimento, criatividade e 
                iniciativas para combater a falta de respeito e o desconhecimento na sociedade.' 
            />
        </section>
      
        <Image
            width={300}
            height={300}
            src={livroNaMao}
            alt='Duas pessoas segurando um livro.'
            className='mx-16 md:flex hidden'
        />
    </section>
  )
}

export default Mission
