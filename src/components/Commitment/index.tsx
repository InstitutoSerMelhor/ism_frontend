import Link from "next/link";

const Commitment = () => {
  return (
    <section className="md:w-[75%] w-[85%] mx-auto py-16">
        <h2 className="text-[#2637F7] text-center font-bold md:text-4xl text-3xl mb-20">Compromissos</h2>

        <h3 className="text-[#2637F7] md:text-left text-left font-bold md:text-2xl text-2xl mb-5">Pacto Global</h3>
        <p className="text-[#4B5563] md:text-left text-justify font-medium text-lg mb-10">
            Lançado em 2000 pelo então secretário-geral das Nações Unidas, Kofi Annan, 
            o Pacto Global é uma chamada para as empresas alinharem suas estratégias e operações aos Dez 
            Princípios universais nas áreas de Direitos Humanos, Trabalho, Meio Ambiente e Anticorrupção 
            e desenvolverem ações que contribuam para o enfrentamento dos desafios da sociedade. É hoje 
            a maior iniciativa de sustentabilidade corporativa do mundo, com mais de 16 mil participantes, 
            entre empresas e organizações, distribuídos em 70 redes locais, que abrangem 160 países.
        </p>

        <h3 className="text-[#2637F7] md:text-left text-left font-bold md:text-2xl text-2xl mb-5">Objetivos de Desenvolvimento Sustentável</h3>
        <p className="text-[#4B5563] md:text-left text-justify font-medium text-lg mb-10"> 
            Em 2015, a ONU propôs aos seus países membros uma nova agenda de 
            desenvolvimento sustentável para os próximos 15 anos, a Agenda 2030, composta pelos 17 
            Objetivos de Desenvolvimento Sustentável (ODS). Esse é um esforço conjunto, de países, empresas, instituições e 
            sociedade civil. Os ODS buscam assegurar os direitos humanos, acabar com a pobreza, lutar 
            contra a desigualdade e a injustiça, alcançar a igualdade de gênero e o empoderamento de 
            mulheres e meninas, agir contra as mudanças climáticas, bem como enfrentar outros dos 
            maiores desafios de nossos tempos. 
            <Link href="https://www.pactoglobal.org.br/ods" target="_blank" className="text-[#2637F7] md:text-left text-center font-medium text-lg"> Clique para saber mais.</Link>
        </p>     
    </section>
  )
}

export default Commitment
