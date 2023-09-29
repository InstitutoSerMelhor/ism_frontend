import pixLogo from '../../assets/images/pix.png';
import coraBank from '../../assets/images/banco-cora-seeklogo.com.svg';
import brazilBank from '../../assets/images/banco-do-brasil-seeklogo.com.svg';
import Image from "next/image";

const DonateOption = () => {
  return (
    <section id="donate-now" className="mt-20 mb-5">
      <h2 className="text-[#2637F7] text-center font-bold md:text-4xl text-3xl mb-20">Faça sua doação</h2>

      <section className="flex md:flex-row flex-col md:justify-round items-center md:gap-0 gap-10 justify-evenly md:w-[75%] w-[90%] mx-auto py-14 bg-[#efefef] rounded">
        <Image
          src={pixLogo}
          width={300}
          height={300}
          alt="Logo do PIX"
        />
        <section className="flex flex-col justify-center items-center">
          <h3 className="text-[#2637F7] md:text-left text-left font-bold md:text-3xl text-2xl md:mb-5 mb-3">Doe via PIX</h3>

          <p className="text-[#4B5563] md:text-left text-justify font-medium text-lg">
            Chave: 09.040.440/0001-47
          </p>
        </section>
      </section>

      <section className="md:w-[75%] w-[90%] mx-auto py-10 rounded">
        <h3 className="text-[#2637F7] text-center font-bold md:text-2xl text-2xl mb-1 bg-[#efefef] p-5">
          Transferência Bancária
        </h3>

        <section className="flex justify-around">
          <section className="md:flex flex-col justify-center items-center hidden gap-8 bg-[#efefef] p-10 w-[25%]">
            <Image
              src={coraBank}
              width={150}
              height={150}
              alt="Logo do Banco Cora"
            />
            <Image
              src={brazilBank}
              width={150}
              height={150}
              alt="Logo do Banco do Brasil."
            />
          </section>

          <section className="bg-[#efefef] md:p-10 py-14 px-3 md:w-[74%] w-[100%]">
            <section>
              <p className="text-[#4B5563] md:text-left text-justify font-medium text-lg mb-5">
                ORGANIZACAO ASS C P PROM E DES DA ASS EDUC CULT AMB E SOCIAL<br />
                Nome da Empresa: Instituto Ser Melhor<br />
                CNPJ: 09.040.440/0001-47
              </p>
            </section>

            <section>
              <p className="text-[#4B5563] md:text-left text-justify font-medium text-lg mb-5">
                Banco Cora<br />
                Instituição: 403 - Cora SCD<br />
                Agência: 0001<br />
                Conta: 3298865-3
              </p>
            </section>

            <section>
              <p className="text-[#4B5563] md:text-left text-justify font-medium text-lg mb-5">
                Banco do Brasil<br />
                Banco 001<br />
                Agência: 5658-8<br />
                Conta Corrente: 34.107-X
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default DonateOption;
