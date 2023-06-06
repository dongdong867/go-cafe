import { cookies } from "next/headers";
import Menu from "./NavbarMenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/images/logo.png";
import Avatar from "./Avatar";
import { redirect } from "next/navigation";

const Navbar = () => {
  if (!cookies().has("role")) redirect("/login");
  const href = cookies().get("role")!.value === "customer" ? "/" : "/user";
  return (
    <>
      <div className="navbar h-16 px-3 sticky top-0 bg-base-100 z-10">
        <div className="navbar-start">
          <Menu />
        </div>
        <div className="navbar-center">
          <Link href={href}>
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
