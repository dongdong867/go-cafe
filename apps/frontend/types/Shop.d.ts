type Shop = {
  user: {
    avatar: {
      data: string;
    };
    account: string;
    name: string;
    phone: string;
    postCount: number;
  };
  address: string;
  info: string;
  storeRating: {
    rating: Rating;
  };
};
