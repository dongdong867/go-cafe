import Image from "next/image";
import Logo from "public/images/logo.png";

const LayoutLoading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center place-items-center space-x-4">
      <Image src={Logo} alt="" className="w-20 max-w-xs aspect-auto" />
      <div className="font-bold text-xl">Go Cafe</div>
    </div>
  );
};

export default LayoutLoading;
