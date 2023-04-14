type User = {
  id: string;
  name: string;
  postCount: number;
  followerCount: number;
  followingCount: number;
  historyPosts: PostModalData[];
  // TODO: add image type
};

type ShopHolder = {
  id: string;
  name: string;
  postCount: number;
  followingCount: number;
  stars: Stars;
  historyPosts: PostModalData[];
  // TODO: add image type
};
