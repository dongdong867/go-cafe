//packages
import Link from 'next/link';

//icons
import { CgMenuLeft } from 'react-icons/cg';
import { FaBell, FaUserFriends } from 'react-icons/fa';
import { MdOutlinePostAdd, MdInfo } from 'react-icons/md';
import DropdownMenuModal from './DropdownMenuModal';

const Menu = () => {
  const button = (
    <>
      <div className="btn btn-ghost text-2xl">
        <CgMenuLeft />
      </div>
    </>
  );

  const listItems = (
    <>
      <li className="menu-title px-4 pt-4">menu list</li>
      <li>
        <Link href={'/'} className="p-4 text-xl font-semibold">
          <FaBell />
          <div>notification</div>
        </Link>
      </li>
      <li>
        <Link href={'/'} className="p-4 text-xl font-semibold">
          <FaUserFriends />
          <div>followed list</div>
        </Link>
      </li>
      <li>
        <Link href={'/'} className="p-4 text-xl font-semibold">
          <MdOutlinePostAdd />
          <div>post article</div>
        </Link>
      </li>
      <li>
        <Link href={'/'} className="p-4 text-xl font-semibold">
          <MdInfo />
          <div>about Go Cafe</div>
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
