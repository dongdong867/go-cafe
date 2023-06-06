import Image from "next/image";

type Props = {
  src: string;
};

const UserAvatar = ({ src }: Props) => {
  return (
    <>
      <div className="avatar">
        <div className="w-40 h-40 max-[450px]:w-24 max-[450px]:h-24 rounded-full">
          <Image
            src={src}
            alt=""
            width={500}
            height={500}
            className="w-full h-auto aspect-square"
          />
        </div>
      </div>
    </>
  );
};

export default UserAvatar;
