import Image from 'next/image';

import TemporaryPicture from 'apps/frontend/public/images/logo.png';
import Link from 'next/link';

type Props = {
  shop: ShopCardForFollowingList;
};

const ShopCardModal = ({ shop }: Props) => {
  return (
    <>
      <Link href={`/shop/${shop.id}`}>
        <div className="card card-side bg-base-300">
          <figure className="p-4">
            <div className="avatar w-28 h-28">
              <Image
                src={TemporaryPicture}
                alt=""
                className="w-28 h-28 aspect-auto rounded-full"
              />
            </div>
          </figure>
          <div className="card-body items-right text-right">
            <div className="card-title text-2xl font-bold justify-end">
              {shop.name}
            </div>
            <div className="text-lg font-medium">
              <div className="flex justify-end">
                <div>Tel: </div>
                <div>{shop.telephone}</div>
              </div>

              <div className="text-right min-[450px]:flex min-[450px]:justify-end">
                <div>Opening Time: </div>
                <div>{shop.openingTime}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShopCardModal;
