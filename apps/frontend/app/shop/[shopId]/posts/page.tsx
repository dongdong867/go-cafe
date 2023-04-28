import userPostList from '@/../public/data/UserPostList';
import UserPostModal from '@/components/UserPostModal';

const ShopPostsPage = () => {
  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto">
        {userPostList.map((post) => (
          <UserPostModal key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default ShopPostsPage;
