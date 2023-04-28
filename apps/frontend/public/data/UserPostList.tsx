const userPostList: UserPost[] = [
  {
    id: 'postId1',
    user: {
      userId: 'userId1',
      userName: 'user name1',
    },
    coffeeShop: {
      coffeeShopId: 'coffeeShopId1',
      coffeeShopName: 'coffee shop name1',
    },
    body: 'this is a fake body',
    rating: {
      general: 4,
      environment: 3,
      meals: 3,
      attitude: 2,
    },
  },
  {
    id: 'postId2',
    user: {
      userId: 'userId2',
      userName: 'user name2',
    },
    coffeeShop: {
      coffeeShopId: 'coffeeShopId2',
      coffeeShopName: 'coffee shop name2',
    },
    body: 'this is a fake body',
    rating: {
      general: 5,
      environment: 2,
      meals: 1,
      attitude: 3,
    },
  },
  {
    id: 'postId3',
    user: {
      userId: 'userId3',
      userName: 'user name3',
    },
    coffeeShop: {
      coffeeShopId: 'coffeeShopId3',
      coffeeShopName: 'coffee shop name3',
    },
    body: 'this is a fake body',
    rating: {
      general: 2,
      environment: 3,
      meals: 4,
      attitude: 4,
    },
  },
];

export default userPostList;
