import PageTitle from '@/components/PageTitle';

type Props = {
  phone: string;
  address: string;
  info: string;
};

const UserShopInfo = ({ phone, address, info }: Props) => {
  return (
    <>
      <div className="text-2xl font-bold mt-8">Information</div>
      <div className="shadow-basic rounded-box mt-2 px-4 py-6 max-[450px]:py-4 font-semibold text-xl space-y-4">
        <div className="w-11/12 max-[450px]:w-full m-auto space-y-4 max-[450px]:space-y-2">
          <div className="flex place-items-baseline space-x-2">
            <div className="text-base">Phone:</div>
            <div>{phone}</div>
          </div>
          <div className="justify-between">
            <div className="text-base">Address:</div>
            <div>{address}</div>
          </div>
          <div className="justify-around">
            <div className="text-base">Info:</div>
            <div>{info}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserShopInfo;
