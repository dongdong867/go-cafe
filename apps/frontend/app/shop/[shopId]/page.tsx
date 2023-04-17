'use client';

import Image from 'next/image';

import TemporaryPicture from 'apps/frontend/public/images/logo.png';
import { MdLocationOn, MdMenuBook } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import RankingModal from '../../components/RankingModal';
import ShopPostModal from '../components/ShopPostModal';
import fakeShopData from 'apps/frontend/public/data/FakeShopData';

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
          className="sticky top-16 w-full max-w-lg "
        />

        <div className="card w-11/12 m-auto bg-base-300">
          <div className="card-body space-y-2 px-6 py-8">
            <div className="bg-base-100 p-4 rounded-xl">
              <div className="card-title text-2xl font-bold">
                {fakeShopData.name}
              </div>
              <div className="font-medium space-y-2">
                <div className="text-base">
                  <div className="flex">
                    <div>Tel: </div>
                    <div>{fakeShopData.telephone}</div>
                  </div>
                  <div className="flex">
                    <div>Opening time: </div>
                    <div>{fakeShopData.openingTime}</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div>Address: </div>
                  <div className="flex gap-x-1 flex-wrap">
                    <div className="shrink-0">
                      {fakeShopData.address.city} City
                    </div>
                    <div className="shrink-0">
                      {fakeShopData.address.area} Area
                    </div>
                    <div className="shrink-0">
                      {fakeShopData.address.road} Road
                    </div>
                    {fakeShopData.address.other && (
                      <div className="shrink-0">
                        {fakeShopData.address.other}
                      </div>
                    )}
                    <div className="shrink-0">
                      No. {fakeShopData.address.houseNumber}
                    </div>
                    {fakeShopData.address.building && (
                      <div className="shrink-0">
                        -{fakeShopData.address.building.subHouseNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-between">
              <button className="btn w-[31%] bg-base-100 text-base-content border-0 text-lg max-[450px]:text-sm rounded-xl flex gap-x-2 p-0 hover:bg-primary hover:text-base-100">
                <MdMenuBook className="text-xl max-[450px]:text-lg" />
                Menu
              </button>
              <button className="btn w-[31%] bg-base-100 text-base-content border-0 text-lg max-[450px]:text-sm rounded-xl flex gap-x-2 p-0 hover:bg-primary hover:text-base-100">
                <MdLocationOn className="text-xl max-[450px]:text-lg" />
                Posts
              </button>
              <button className="btn w-[32%] bg-base-100 text-secondary-focus border-0 text-lg max-[450px]:text-sm rounded-xl flex gap-x-1 p-0 hover:bg-secondary-focus hover:text-base-100">
                <FaHeart />
                Follow
              </button>
            </div>
            <div className="flex flex-col items-center bg-base-100 rounded-xl py-4 font-semibold space-y-2">
              <RankingModal rateName="general" disable={true} />
              <RankingModal rateName="rate1" disable={true} />
              <RankingModal rateName="rate2" disable={true} />
            </div>
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
