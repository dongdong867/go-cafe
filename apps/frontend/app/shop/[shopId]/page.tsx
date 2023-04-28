'use client';

import Image from 'next/image';

import TemporaryPicture from '/public/images/logo.png';

import fakeShopData from '@/../public/data/FakeShopData';
import ShopInfoModal from '../components/ShopInfoModal/Modal';
import ShopPostModal from '../components/ShopPostModal';

type Props = {
  param: {
    shopId: string;
  };
};

const ShopPage = ({ param }: Props) => {
  return (
    <>
      <div className="w-full max-w-lg h-full m-auto space-y-4">
        <Image
          src={TemporaryPicture}
          alt=""
          className="sticky top-20 w-full max-w-lg "
        />

        <div className="card w-11/12 -top-14 m-auto bg-base-300">
          <div className="card-body space-y-2 px-6 py-8">
            <ShopInfoModal data={fakeShopData} />
          </div>
        </div>

        <div className="w-11/12 m-auto">
          {fakeShopData.posts.map((post) => (
            <ShopPostModal key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
