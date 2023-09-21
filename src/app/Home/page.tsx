import Image from 'next/image'
import ismLogo from '../../../public/ism-logo.png';
import './home.css';

const Home = () => {
  return (
    <main className='bg__img-children flex flex-col md:justify-center justify-around items-center'>
        <div></div>
        <div className='home__message-container text-white text-center font-medium leading-normal md:text-5xl text-4xl px-2'>
            <p>Descubra o potencial <br/> transformador da educação</p>
        </div>
        <div className='home__logo-ism-container flex gap-5 mt-12 mb-4'>
            <Image
                src={ismLogo}
                alt="Logo do ISM" 
                width={50} 
                height={50}
                className='logo-home' 
            />
            <p className='text-xl leading-6 text-white'>Instituto <br /> Ser Melhor</p> 
        </div>
    </main>
  )
}

export default Home;
