type PostModalData = {
  id: string;
  body: string;
  // TODO: add image type
};

type UserPost = {
  id: string;
  user: {
    userId: string;
    userName: string;
  };
  coffeeShop: {
    coffeeShopId: string;
    coffeeShopName: string;
  };
  stars: Stars;
  body: string;
  // TODO: add image types
};

type ShopPost = {
  id: string;
  coffeeShopId: string;
  body: string;
  // TODO: add image type
};
