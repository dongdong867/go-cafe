import UserPostModal from 'apps/frontend/app/components/UserPostModal';

const ShopPostsPage = () => {
  const postList: UserPost[] = [
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
      stars: {
        generalStar: 5,
        starType1: 5,
        starType2: 5,
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
      stars: {
        generalStar: 5,
        starType1: 5,
        starType2: 5,
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
      stars: {
        generalStar: 5,
        starType1: 5,
        starType2: 5,
      },
    },
  ];
  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto">
        {postList.map((post) => (
          <UserPostModal key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default ShopPostsPage;
