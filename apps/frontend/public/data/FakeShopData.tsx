const fakeShopData: ShopInfoForUser = {
  id: '12345',
  name: 'OOO Shop',
  telephone: 12344567890,
  openingTime: '0800-2400',
  address: {
    city: 'Taipei',
    area: 'Shin Yi',
    road: 'Shin Yi Road',
    houseNumber: 87,
  },
  stars: {
    generalStar: 4,
    starType1: 3,
    starType2: 2,
  },
  posts: [
    {
      id: '12345',
      coffeeShopId: '12345',
      title: 'discount',
      body: 'this is a test body',
    },
    {
      id: '13524',
      coffeeShopId: '12345',
      title: 'notification',
      body: 'this is a test body',
    },
    {
      id: '54321',
      coffeeShopId: '12345',
      title: 'discount',
      body: 'this is a test body',
    },
  ],
};

export default fakeShopData;
