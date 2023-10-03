import Title from '../Title';
import Description from '../Description';
import grafico from '../../assets/images/graficomelhorado.png'; 
import Image from 'next/image';

const Vision = () => {
  return (
    <section className='flex justify-center items-center'>
        <Image
            width={300}
            height={300}
            src={grafico}
            alt='Duas pessoas segurando um livro.'
            className='lg:mx-16 sm:mx-10 sm:flex hidden'
        />

        <section className='md:w-[60%] w-full flex flex-col justify-center h-[100%]'>
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
