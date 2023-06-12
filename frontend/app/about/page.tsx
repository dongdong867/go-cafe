import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.png";

const AboutPage = () => {
  return (
    <div className="w-full max-w-lg min-[450px]:w-11/12 h-[calc(100vh-120px)] m-auto flex flex-col justify-center place-items-center">
      <Image src={Logo} alt="" className="w-40 aspect-square" />
      <div className="text-2xl font-semibold text-center">
        <div className="text-4xl font-bold">Go Cafe</div>
        <div className="text-sm">version 1.0.0 (2023/06)</div>
        <div className="text-xs mt-4">
          <div className="space-x-1">
            <span>Copyright © 2023</span>
            <Link
              target="_blank"
              href={"https://github.com/dongdong867"}
              className="text-primary underline underline-offset-1"
            >
              Dong
            </Link>
          </div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
