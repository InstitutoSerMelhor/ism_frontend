import Image from 'next/image'
import React from 'react'
import AboutUsImg from '../../assets/images/img-about-us.webp'
import PersonCircle from '@/components/PersonCircle'
import { membersName } from '@/utils/mocks/membersName'
import NavBar from '@/components/NavBar'

const About = () => {
    return (
        <div>
            <NavBar beTransparent={false} />
            <div className='flex flex-col items-center'>
                <Image
                    src={AboutUsImg}
                    height={'200'}
                    layout='responsive'
                    alt='Imagem de voluntários trabalhando.'
                    className='md:block hidden'
                />

                <h3 className='md:hidden block text-[#2637F7] md:text-left text-center font-bold md:text-3xl text-3xl mt-10'>Sobre nós</h3>

                <div className='md:absolute md:w-[75%] w-[85%] h-full mx-auto flex flex-col items-center md:mt-20 mt-5'>
                    <p className='md:text-white text-[#4B5563] md:text-2xl text-xl tracking-wide my-6 text-justify font-medium'>
                        O Instituto Ser Melhor é uma OSC, fundada na cidade de Carapicuíba, em 2007, com objetivo
                        de unificar valores e saberes e desenvolver projetos nas mais diversas áreas da sociedade,
                        tendo a educação, a ciência, a cultura e o meio ambiente como princípios norteadores do
                        propósito de desenvolvimento social e socioambiental.
                    </p>
                    <p className='md:text-white text-[#4B5563] md:text-2xl text-xl tracking-wide my-6 text-justify font-medium'>
                        A educação, a ciência e a cultura são a pedra fundamental do ISM, assim é importante
                        pensar um sistema de ensino voltado para a criatividade e desenvolvimento intelectual,
                        complementando, diretamente, a BNCC – Base Nacional Comum Curricular.
                    </p>
                </div>
                <div className='md:w-[75%] w-[85%] flex items-center text-[#4B5563] text-lg mx-20 text-center font-thin italic md:mt-20 mt-10 md:h-[30vh]'>
                    <p>
                        "Nossos planejamentos educacionais, buscam seguir diretamente os fundamentos educacionais
                        de Ken Robinson, considerado o patrono da educação criativa nas melhores instituições de
                        ensino do mundo.  Para o ISM a educação deve ser vista como uma comunidade de aprendizes,
                        com desenvolvimento de ótimas relações entre estudantes e professores, unidos por um currículo
                        integrado, além disso, disciplinas humanas e exatas necessitam ter praticamente a mesma
                        importância ou tanto quanto."
                    </p>
                </div>

                <div className='m-4'>
                    <h3 className='text-[#2637F7] text-center font-bold md:text-4xl text-3xl my-20'>
                        Nosso time
                    </h3>
                    <div className='flex flex-wrap flex-row justify-center gap-8 mt-4 mb-20'>
                        {membersName?.map((member) => (
                            <PersonCircle membersName={member.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About