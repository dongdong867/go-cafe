import Image from "next/image";
import Link from "next/link";
import Arrow from "public/images/arrow.svg";

type Props = {
  shop: Shop;
};

const ShopCardModal = ({ shop }: Props) => {
  return (
    <>
      <Link href={`/shop/${shop.user.account}`}>
        <div className="card card-side bg-base-100 shadow-[0_4px_15px_rgba(0,0,0,0.25)]">
          <figure className="p-4">
            <div className="avatar w-28 h-28">
              <Image
                src={shop.user.avatar.data}
                alt=""
                width={1000}
                height={1000}
                className="w-28 h-28 aspect-square rounded-xl"
              />
            </div>
          </figure>
          <div className="card-body justify-between items-right text-right pl-0 pr-4 py-4">
            <div className="card-title text-2xl font-bold justify-end">
              {shop.user.name}
            </div>
            <div className="text-lg max-[450px]:text-sm font-semibold">
              <div className="flex justify-end space-x-1">
                <div>Tel: </div>
                <Link
                  href={`tel:${shop.user.phone}`}
                  className="text-primary-focus underline underline-offset-2"
                >
                  {shop.user.phone}
                </Link>
              </div>

              <Link
                target="_blank"
                href={`https://www.google.com/maps/place/${shop.address}`}
                className="break-words text-primary-focus text-right underline underline-offset-2 max-[450px]:text-xs"
              >
                {shop.address}
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShopCardModal;
