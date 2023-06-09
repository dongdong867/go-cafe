import { cookies } from "next/headers";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import { FaConciergeBell, FaUserFriends } from "react-icons/fa";
import { MdInfo, MdOutlinePostAdd } from "react-icons/md";
import DropdownMenuModal from "./DropdownMenuModal";

const Menu = () => {
  if (!cookies().has("role")) return;

  const role = cookies().get("role")!.value;

  const button = (
    <>
      <div className="btn btn-ghost text-2xl">
        <CgMenuLeft />
      </div>
    </>
  );

  const listItems =
    role === "customer" ? (
      <>
        <li className="min-[450px]:menu-title text-neutral-400 font-bold p-2">
          menu list
        </li>
        <li>
          <Link
            href={"/user/following"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary 
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <FaUserFriends />
            <div>Following list</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/post/create"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary 
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <MdOutlinePostAdd />
            <div>Create Post</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary 
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <MdInfo />
            <div>About Go Cafe</div>
          </Link>
        </li>
      </>
    ) : (
      <>
        <li className="min-[450px]:menu-title text-neutral-400 font-bold p-2">
          menu list
        </li>
        <li>
          <Link
            href={"/post/create/shopPost"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary 
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <MdOutlinePostAdd />
            <div>Create Post</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/order"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary 
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
            <FaConciergeBell />
            <div>Orders</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="
              p-4 
              text-xl font-semibold 
              active:bg-primary 
              active:text-white 
              max-[450px]:p-2 
              max-[450px]:text-base"
          >
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
