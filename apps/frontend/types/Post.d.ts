type PostModalData = {
  id: string;
  user: {
    userId: string;
    userName: string;
  };
  coffeeShop: {
    coffeeShopId: string;
    coffeeShopName: string;
  };
  body: string;
  generalStars: number;
  // TODO: add image types
};

type Post = {
  id: string;
  user: string;
  coffeeShop: {
    coffeeShopId: string;
    coffeeShopName: string;
  };
  stars: Stars;
  body: string;
  // TODO: add image types
};
