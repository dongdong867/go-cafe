import UserPostList from '@/../public/data/UserPostList';

import UserInfo from './components/UserInfo';
import UserPostModal from '@/components/UserPostModal';

const UserPage = () => {
  return (
    <>
      <div className="w-full h-fit max-w-lg max-[450px]:w-11/12 m-auto">
        <UserInfo />

        <div className="divider" />

        <div>
          <div className="text-2xl font-semibold my-4">History</div>
          {UserPostList.map((post) => (
            <UserPostModal key={post.id} editable post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPage;
