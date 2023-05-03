import userPostList from '@/../public/data/UserPostList';
import SearchBar from '@/components/Input/SearchBar';
import UserPostModal from '@/components/UserPostModal';

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-start place-items-center">
        <SearchBar route="home" />
        <div className="pb-4">
          {userPostList.map((post) => (
            <UserPostModal key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
