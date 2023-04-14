import SearchBar from '../components/SearchBar';
import Post from './components/Post';

const Home = () => {
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
      <div className="w-full h-full flex flex-col justify-start place-items-center">
        <SearchBar route="home" />
        <div className="space-y-4 pb-4">
          {postList.map((post) => (
            <Post data={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
