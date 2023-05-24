type PostModalData = {
  id: string;
  body: string;
  pictures: {
    picture: {
      data: string;
    };
  }[];
};

type UserPost = {
  id: string;
  post: {
    body: string;
    postPicture: {
      picture: {
        data: string;
      };
    }[];
  };
  rating: {
    general: number;
    environment: number;
    meals: number;
    attitude: number;
  };
  store: {
    user: {
      name: string;
      account: string;
    };
  };
  customer: {
    user: {
      name: string;
      account: string;
    };
  };
};

type ShopPost = {
  id: string;
  post: {
    body: string;
    postPicture: {
      picture: {
        data: string;
      };
    }[];
  };
  title: string;
};
