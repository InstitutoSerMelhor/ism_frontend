import CardProject, { Projeto } from "@/components/CardProject"
import { projetos } from "@/utils/mocks/projects"


const Projects = () => {
    return (
        <section className="md:w-[80%] w-[90%] mx-auto md:mt-24 py-16 mb-16">
          <h2 className="text-[#2637F7] text-center font-bold md:text-4xl text-3xl mb-20">Projetos</h2>

          <section className="flex flex-wrap justify-center mx-auto">
            {/* {bg-[url('../assets/images/enviroment.png')]} */}

            <CardProject 
              area="Educação"
              projectName="New Earth"
              color="bg-yellow-500"
              description="É um projeto que objetiva a busca e desenvolvimento de saberes e conhecimentos que resultam em discussões didáticas em torno das temáticas sustentabilidade e conservação dos recursos naturais, economia e sociedade."
            />
            <CardProject 
              area="Educação"
              projectName="ProCap ISM"
              color="bg-blue-500"
              description="Tem como propósito a capacitação e a qualificação profissional de adolescentes, jovens e adultos através de cursos livres em diversas áreas, entre elas, tecnologia, serviços, administrativa e industrial."
            />
            <CardProject 
              area="Meio Ambiente"
              projectName="Compostagem Orgânica"
              color="bg-green-500"
              description="É uma tecnologia que busca aumentar a eficiência dos processos de reciclagem de resíduos orgânicos, de modo que possam ser reaproveitados na fertilização da terra para agricultura com segurança."
            />
            <CardProject 
              area="Cultura e Artes"
              projectName="Best CineBus"
              color="bg-purple-500"
              description="Promovendo a cultura brasileira e regional em regiões remotas, nosso projeto utiliza um ônibus adaptado para exibir filmes infantis e juvenis, levando a experiência cinematográfica a locais que nunca tiveram acesso a uma sala de cinema."
            />
            <CardProject 
              area="Meio Ambiente"
              projectName="Hortas Urbanas"
              color="bg-lime-500"
              description="Implantamos hortas urbanas para estimular a agricultura sustentável nas cidades, promovendo emprego e renda. Utilizamos métodos naturais e biológicos, sem defensivos químicos, e adotamos a rotação de culturas para preservar o solo e o meio ambiente."
            />
            <CardProject 
              area="Educação"
              projectName="Educação Humanitária"
              color="bg-orange-500"
              description="Tem como objetivo incentivar, alunos, pessoas e a sociedade a ter maior compaixão, respeito e empatia pelo ser humano, pelos animais e pelo meio ambiente unificando com a ideia de desenvolvimento cultural regional."
            />
            
            {/* {
              projetos.map((p: Projeto, index) => {
                return (
                  <CardProject 
                    key={index}
                    area={p.area}
                    projectName={p.projectName}
                    color={p.color}
                    description={p.description}
                  />
              )})
            } */}
          </section>
        </section>
    )
}

export default Projects