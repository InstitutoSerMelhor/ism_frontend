import Link from "next/link";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  return (    
    <div className="bg-blueHeader p-3 md:p-5 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
      <NavMenu />
    </div>
  );
};

export default Header;