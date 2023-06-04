//packages
import Link from 'next/link';
import Image from 'next/image';

//icons
import { BsPersonCircle } from 'react-icons/bs';
import { MdLogout, MdMenuBook } from 'react-icons/md';

//components
import DropdownMenuModal from './DropdownMenuModal';
import { cookies } from 'next/headers';

import NoAvatar from '/public/images/logo.png';
import { redirect } from 'next/navigation';
import { FaUserEdit } from 'react-icons/fa';

const Avatar = () => {
  if (!cookies().has('role')) redirect('/login');

  const role = cookies().get('role').value;

  const avatar = cookies().has('avatar')
    ? cookies().get('avatar').value
    : NoAvatar;

  const button = (
    <>
      <div className="btn btn-ghost btn-circle border-2 overflow-hidden avatar">
        <Image src={avatar} alt="user" width={1000} height={1000} />
      </div>
    </>
  );
  const listItems =
    role === 'customer' ? (
      <>
        <li className="menu-title text-right px-4 pt-4">user settings</li>
        <li>
          <Link href={'/user'} className="p-4 text-xl font-semibold">
            <BsPersonCircle />
            <div>profile</div>
          </Link>
        </li>
        <li>
          <Link href={'/user/edit'} className="p-4 text-xl font-semibold">
            <FaUserEdit />
            <div>Edit Profile</div>
          </Link>
        </li>
        <li>
          <Link
            href={'/login'}
            className="p-4 text-xl text-error font-semibold"
          >
            <MdLogout />
            <div>Logout</div>
          </Link>
        </li>
      </>
    ) : (
      <>
        <li className="menu-title text-right px-4 pt-4">user settings</li>
        <li>
          <Link href={'/user'} className="p-4 text-xl font-semibold">
            <BsPersonCircle />
            <div>profile</div>
          </Link>
        </li>
        <li>
          <Link href={'/menu'} className="p-4 text-xl font-semibold">
            <MdMenuBook />
            <div>Edit Menu</div>
          </Link>
        </li>
        <li>
          <Link href={'/user/edit/shop'} className="p-4 text-xl font-semibold">
            <FaUserEdit />
            <div>Edit Profile</div>
          </Link>
        </li>
        <li>
          <Link
            href={'/login'}
            className="p-4 text-xl text-error font-semibold"
          >
            <MdLogout />
            <div>Logout</div>
          </Link>
        </li>
      </>
    );

  return (
    <div className="z-20">
      <DropdownMenuModal
        position="dropdown-end"
        button={button}
        listItems={listItems}
      />
    </div>
  );
};

export default Avatar;
