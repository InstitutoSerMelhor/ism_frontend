import Link from 'next/link';

const optionsMenu = ['Home', 'Junte-se a Nós', 'Sobre Nós', 'Notícias', 'Login', 'Doar Agora'];

function NavMenu() {
  return (
    <ul className='flex flex-col gap-6 sm:flex-row sm:gap-3'>
      {optionsMenu.map((texto) => (
        <li key={texto}>
          <Link href={`/${texto.toLowerCase()}`}>
            <p className='text-[#ffffff]' >{texto}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;