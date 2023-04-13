'use client';

//packages
import Image from 'next/image';
import Link from 'next/link';

//components
import Logo from 'apps/frontend/public/images/logo.png';
import Menu from './navbar/Menu';
import Avatar from './navbar/Avatar';

const Navbar = () => {
  return (
    <>
      <div className="navbar h-16 px-3 sticky top-0 bg-base-100 z-10">
        <div className="navbar-start">
          <Menu />
        </div>
        <div className="navbar-center">
          <Link href={'/'}>
            <Image src={Logo} alt="icon" className="w-12 h-12 aspect-auto" />
          </Link>
        </div>
        <div className="navbar-end">
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default Navbar;
