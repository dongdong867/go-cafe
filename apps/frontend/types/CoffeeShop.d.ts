type Address = {
  city: string;
  area: string;
  road: string;
  houseNumber: number;
  other?: string;
  building?: {
    floor?: string;
    subHouseNumber: number;
  };
};

type CoffeeShop = {
  id: number;
  name: string;
  telephone: number;
  openingTime: string;
  address: Address;
  following: boolean;
  stars: Stars;
  posts: PostModalData[];
  // TODO: add image, menu type
};

type ShopInfoForUser = {
  id: string;
  name: string;
  postCount: number;
  followingCount: number;
  stars: Stars;
  historyPosts: PostModalData[];
  // TODO: add image type
};

type ShopCardForFollowingList = {
  id: string;
  name: string;
  telephone: number;
  openingTime: string;
  // TODO: add image type
};
