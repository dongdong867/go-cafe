import Image from 'next/image';

import TemporaryPicture from '/public/images/logo.png';
import Link from 'next/link';

type Props = {
  shop: ShopCardForFollowingList;
};

const ShopCardModal = ({ shop }: Props) => {
  return (
    <>
      <Link href={`/shop/${shop.id}`}>
        <div className="card card-side bg-base-100 shadow-[0_4px_15px_rgba(0,0,0,0.25)]">
          <figure className="p-4">
            <div className="avatar w-28 h-28">
              <Image
                src={TemporaryPicture}
                alt=""
                className="w-28 h-28 aspect-square rounded-xl"
              />
            </div>
          </figure>
          <div className="card-body justify-around items-right text-right pl-0 pr-4 py-4">
            <div className="card-title text-2xl font-bold justify-end">
              {shop.name}
            </div>
            <div className="text-lg max-[450px]:text-sm font-medium">
              <div className="flex justify-end space-x-1">
                <div>Tel: </div>
                <div className="font-semibold">{shop.telephone}</div>
              </div>

              <div className="text-right min-[450px]:flex min-[450px]:justify-end">
                <div>Opening Time: </div>
                <div className="font-semibold">{shop.openingTime}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShopCardModal;
