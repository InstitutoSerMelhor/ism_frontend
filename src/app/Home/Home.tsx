import Image from 'next/image'
import ismLogo from '../../../public/ism-logo.png';
import './home.css';
import NavBar from '@/components/NavBar';

const Home = () => {
  return (
    <main className='bg__img-children'>
      <NavBar isTransparent={true} />
      <section className='h-full flex flex-col md:justify-start justify-start items-center'>
          <div className='flex items-end text-white text-center font-medium leading-normal md:text-5xl text-[2rem] h-[45%]'>
              <p className='px-5'>Descubra o potencial <br/> transformador da educação</p>
          </div>
          <div className='flex justify-start gap-5 md:mt-12 mt-16'>
              <Image
                  src={ismLogo}
                  alt="Logo do ISM" 
                  width={50} 
                  height={50}
                  fill={false}
                  className='logo-home'
              />
              <p className='md:text-xl text-[1.2rem] leading-6 text-white'>Instituto <br /> Ser Melhor</p> 
          </div>
      </section>
    </main>

  )
}

export default Home;
