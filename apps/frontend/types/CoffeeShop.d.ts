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
