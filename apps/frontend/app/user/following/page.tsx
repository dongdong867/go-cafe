import ShopCardModal from './components/ShopCardModal';

const FollowingPage = () => {
  const shopList: ShopCardForFollowingList[] = [
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
    {
      id: '12345',
      name: 'XXX Shop',
      telephone: 1230487129384,
      openingTime: '0800-2400',
    },
  ];
  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto pt-4">
        <div className="text-3xl font-bold">Following List</div>
        <div className="divider" />
        <div className="flex flex-col space-y-4">
          {shopList.map((shop) => (
            <ShopCardModal shop={shop} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FollowingPage;
