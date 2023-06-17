import { cookies } from "next/headers";
import NoAvatar from "/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { MdLogout, MdMenuBook } from "react-icons/md";
import DropdownMenuModal from "./DropdownMenuModal";

const Avatar = () => {
  if (!cookies().has("role")) return;

  const role = cookies().get("role")!.value;

  const avatar = cookies().has("avatar")
    ? cookies().get("avatar")!.value
    : NoAvatar;

  const button = (
    <>
      <div className="btn btn-ghost btn-circle border-2 overflow-hidden avatar">
        <Image src={avatar} alt="user" width={1000} height={1000} />
      </div>
    </>
  );
  const listItems =
    role === "customer" ? (
      <>
        <li className="min-[450px]:menu-title text-neutral-400 font-bold p-2 text-right">
          user settings
        </li>
        <li>
          <Link
            href={"/user"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary-focus
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <BsPersonCircle />
            <div>profile</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/user/edit"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary-focus
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <FaUserEdit />
            <div>Edit Profile</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/login"}
            className="
              p-4 
              text-xl text-error 
              font-semibold 
              active:bg-error 
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <MdLogout />
            <div>Logout</div>
          </Link>
        </li>
      </>
    ) : (
      <>
        <li className="min-[450px]:menu-title text-neutral-400 font-bold p-2 text-right">
          user settings
        </li>
        <li>
          <Link
            href={"/user"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary-focus
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <BsPersonCircle />
            <div>profile</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/menu"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary-focus
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <MdMenuBook />
            <div>Edit Menu</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/user/edit/shop"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary-focus
              active:text-white
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <FaUserEdit />
            <div>Edit Profile</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/login"}
            className="
              p-4 
              text-xl text-error 
              font-semibold 
              active:bg-error 
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
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
