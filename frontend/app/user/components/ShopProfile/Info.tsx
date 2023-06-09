import Link from "next/link";

type Props = {
  phone: string;
  address: string;
  info: string;
};

const UserShopInfo = ({ phone, address, info }: Props) => {
  return (
    <>
      <div className="text-2xl font-bold mt-8">Information</div>
      <div className="shadow-basic rounded-box mt-2 px-2 py-6 font-semibold text-lg space-y-4 max-[450px]:text-sm max-[450px]:px-4 max-[450px]:py-4 ">
        <div className="w-11/12 max-[450px]:w-full m-auto space-y-4 max-[450px]:space-y-2">
          <div className="flex place-items-baseline space-x-2">
            <div className="text-base">Phone:</div>
            <Link
              href={`tel:${phone}`}
              className="text-primary-focus underline underline-offset-2"
            >
              {phone}
            </Link>
          </div>
          <div className="justify-between">
            <div className="text-base">Address:</div>
            <Link
              href={`https://www.google.com/maps/place/${address}`}
              className="text-primary-focus underline underline-offset-2"
            >
              {address}
            </Link>
          </div>
          <div className="justify-around">
            <div className="text-base">Info:</div>
            <div className="whitespace-pre-line">{info}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserShopInfo;
