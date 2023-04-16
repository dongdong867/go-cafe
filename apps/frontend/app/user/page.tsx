import Post from '../components/Post';
import UserInfo from './components/UserInfo';

const UserPage = () => {
  const postList: PostModalData[] = [
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
      generalStars: 4.0,
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
      generalStars: 4.0,
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
      generalStars: 4.0,
    },
  ];
  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto">
        <UserInfo />

        <div className="divider" />

        <div>
          <div className="text-2xl font-semibold my-4">History</div>
          {postList.map((post) => (
            <Post data={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPage;
