import Image from 'next/image'
import React from 'react'
import AboutUsImg from '../../assets/img-about-us.svg'
import PersonCircle from '@/components/PersonCircle'
import { membersName } from '@/utils/mocks/membersName'

const About = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-between m-4'>
                <h3 className='max-w-md font-light text-sm'>
                    Sobre o Instituto:
                    <br />
                    O INSTITUTO SER MELHOR é uma OSC, fundada na Cidade de Carapicuíba, em 2007, com objetivo
                    de unificar valores e saberes e desenvolver projetos nas mais diversas áreas da sociedade, 
                    tendo a educação, a ciência, a cultura e o meio ambiente como princípios norteadores do 
                    propósito de desenvolvimento social e socioambiental.
                </h3>
                <small className='max-w-md font-light'>
                    A educação, a ciência e a cultura são a pedra fundamental do ISM, assim é importante 
                    pensar um sistema de ensino voltado para a criatividade e desenvolvimento intelectual, 
                    complementando, diretamente, a BNCC– Base Nacional Comum Curricular.
                </small>
            </div>
            <small className='mx-20 my-6 text-center font-light italic'>
                "Nossos planejamentos educacionais, buscam seguir diretamente os fundamentos educacionais 
                de Ken Robinson, considerado o patrono da educação criativa nas melhores instituições de 
                ensino do mundo.  Para o ISM a educação deve ser vista como uma comunidade de aprendizes, 
                com desenvolvimento de ótimas relações entre estudantes e professores, unidos por um currículo
                integrado, além disso, disciplinas humanas e exatas necessitam ter praticamente a mesma 
                importância ou tanto quanto."
            </small>
            <Image
                src={AboutUsImg}
                height={'200'}
                layout='responsive'
                alt='Imagem de voluntários ajudando'
            />
            <div className='m-4'>
                <h3 >Atualmente nosso time é composto por:</h3>
                <div className='flex flex-wrap flex-row justify-center gap-8 mt-4'>
                    {membersName?.map((member) => (
                        <PersonCircle membersName={member.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About