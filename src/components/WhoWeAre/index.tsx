import Image from 'next/image';
import livroNaMao from '../../assets/images/livro-na-mao.png'; 


const WhoWeAre = () => {
    return (
        <section>
            <section>
                <Image
                    src={livroNaMao}
                    alt='Duas pessoas segurando um livro.'
                />
            </section>
            <section>
                <h3>Quem somos</h3>
                <p>
                    O Instituto Ser Melhor é uma OSC fundada em 2007 com objetivo de desenvolver 
                    projetos nas mais diversas áreas da sociedade, tendo a educação, a ciência, a
                    cultura e o meio ambiente como pedra fundamental e princípios norteadores de
                    nossa filosofia.
                </p>
            </section>
        </section>
    )
}

export default WhoWeAre;
