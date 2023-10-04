import Image from 'next/image';
import livroNaMao from '../../assets/images/livro-na-mao.png'; 
import Title from '../Title';
import Description from '../Description';


const WhoWeAre = () => {
    return (
        <section className='flex justify-center items-center md:mt-0 mt-28 md:pb-18'>
            <Image
                width={300}
                height={300}
                src={livroNaMao}
                alt='Duas pessoas segurando um livro.'
                className='lg:mx-16 sm:mx-10 sm:flex hidden'
            />

            <section className='md:w-[60%] w-full flex flex-col justify-center h-[100%]'>
                <Title text='Quem somos' />
                <Description message='
                    O Instituto Ser Melhor é uma OSC fundada em 2007 com objetivo de desenvolver 
                    projetos nas mais diversas áreas da sociedade, tendo a educação, a ciência, a
                    cultura e o meio ambiente como pedra fundamental e princípios norteadores de
                    nossa filosofia.' 
                />
            </section>
        </section>
    )
}

export default WhoWeAre;

{/* <section className='flex justify-center items-center md:mt-0 mt-28 md:pb-18'>
<Image
    width={300}
    height={300}
    src={livroNaMao}
    alt='Duas pessoas segurando um livro.'
    className='mx-16 md:flex hidden'
/>

<section className='md:w-[60%] w-full flex flex-col justify-center h-[100%]'>
    <Title text='Quem somos' />
    <Description message='
        O Instituto Ser Melhor é uma OSC fundada em 2007 com objetivo de desenvolver 
        projetos nas mais diversas áreas da sociedade, tendo a educação, a ciência, a
        cultura e o meio ambiente como pedra fundamental e princípios norteadores de
        nossa filosofia.' 
    />
</section>
</section> */}