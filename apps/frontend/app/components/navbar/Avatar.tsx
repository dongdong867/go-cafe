//packages
import Link from 'next/link';
import Image from 'next/image';

//icons
import { BsPersonCircle } from 'react-icons/bs';
import { MdSettings, MdLogout } from 'react-icons/md';

//components
import DropdownMenuModal from './DropdownMenuModal';
import { cookies } from 'next/headers';

const Avatar = () => {
  const button = (
    <>
      <div className="btn btn-ghost btn-circle border-2 overflow-hidden avatar">
        <Image
          src={cookies().get('avatar').value}
          alt="user"
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
  const listItems = (
    <>
      <li className="menu-title text-right px-4 pt-4">user settings</li>
      <li>
        <Link href={'/user'} className="p-4 text-xl font-semibold">
          <BsPersonCircle />
          <div>profile</div>
        </Link>
      </li>
      <li>
        <Link href={'/'} className="p-4 text-xl font-semibold">
          <MdSettings />
          <div>settings</div>
        </Link>
      </li>
      <li>
        <Link href={'/'} className="p-4 text-xl text-error font-semibold">
          <MdLogout />
          <div>Logout</div>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <DropdownMenuModal
        position="dropdown-end"
        button={button}
        listItems={listItems}
      />
    </>
  );
};

export default Avatar;
