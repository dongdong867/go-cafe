//packages
import Link from 'next/link';

//icons
import { CgMenuLeft } from 'react-icons/cg';
import { FaBell, FaUserFriends } from 'react-icons/fa';
import { MdOutlinePostAdd, MdInfo } from 'react-icons/md';
import DropdownMenuModal from './DropdownMenuModal';
import { cookies } from 'next/headers';

const Menu = () => {
  const createPostHref =
    cookies().get('role').value === 'store'
      ? '/post/create/shopPost'
      : '/post/create';

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
        <Link href={'/user/following'} className="p-4 text-xl font-semibold">
          <FaUserFriends />
          <div>Following list</div>
        </Link>
      </li>
      <li>
        <Link href={createPostHref} className="p-4 text-xl font-semibold">
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
  );

  return (
    <>
      <DropdownMenuModal button={button} listItems={listItems} />
    </>
  );
};

export default Menu;
