import React from 'react';
import logo from '../../../public/ISM_logo_sm.png';
import Image from 'next/image';

function Logo() {
  return (
    <div>
      <Image src={logo} alt='logo' />
    </div>
  );
}

export default Logo;