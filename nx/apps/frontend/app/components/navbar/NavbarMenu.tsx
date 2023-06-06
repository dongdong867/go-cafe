//packages
import Link from 'next/link';

//icons
import { CgMenuLeft } from 'react-icons/cg';
import { FaConciergeBell, FaUserFriends } from 'react-icons/fa';
import { MdOutlinePostAdd, MdInfo } from 'react-icons/md';
import DropdownMenuModal from './DropdownMenuModal';
import { cookies } from 'next/headers';

const Menu = () => {
  if (!cookies().has('role')) return;

  const role = cookies().get('role').value;

  const button = (
    <>
      <div className="btn btn-ghost text-2xl">
        <CgMenuLeft />
      </div>
    </>
  );

  const listItems =
    role === 'customer' ? (
      <>
        <li className="menu-title px-4 pt-4">menu list</li>
        <li>
          <Link href={'/user/following'} className="p-4 text-xl font-semibold">
            <FaUserFriends />
            <div>Following list</div>
          </Link>
        </li>
        <li>
          <Link href={'/post/create'} className="p-4 text-xl font-semibold">
            <MdOutlinePostAdd />
            <div>Create Post</div>
          </Link>
        </li>
        <li>
          <Link href={'/'} className="p-4 text-xl font-semibold">
            <MdInfo />
            <div>About Go Cafe</div>
          </Link>
        </li>
      </>
    ) : (
      <>
        <li className="menu-title px-4 pt-4">menu list</li>
        <li>
          <Link
            href={'/post/create/shopPost'}
            className="p-4 text-xl font-semibold"
          >
            <MdOutlinePostAdd />
            <div>Create Post</div>
          </Link>
        </li>
        <li>
          <Link href={'/order'} className="p-4 text-xl font-semibold">
            <FaConciergeBell />
            <div>Orders</div>
          </Link>
        </li>
        <li>
          <Link href={'/'} className="p-4 text-xl font-semibold">
            <MdInfo />
            <div>About Go Cafe</div>
          </Link>
        </li>
      </>
    );

  return (
    <>
      <DropdownMenuModal button={button} listItems={listItems} />
    </>
  );
};

export default Menu;
