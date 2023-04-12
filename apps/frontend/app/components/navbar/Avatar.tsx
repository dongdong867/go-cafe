//packages
import Link from 'next/link';
import Image from 'next/image';

//images
import TemporaryPicture from 'apps/frontend/public/images/logo.png';

//icons
import { BsPersonCircle } from 'react-icons/bs';
import { MdSettings, MdLogout } from 'react-icons/md';

//components
import DropdownMenuModal from './DropdownMenuModal';

const Avatar = () => {
  const button = (
    <>
      <div className="btn btn-ghost btn-circle avatar">
        {/* TODO: replace temporary picture with user image */}
        <Image src={TemporaryPicture} alt="user" />
      </div>
    </>
  );
  const listItems = (
    <>
      <li className="menu-title text-right px-4 pt-4">user settings</li>
      <li>
        <Link href={'/'} className="p-4 text-xl font-semibold">
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
