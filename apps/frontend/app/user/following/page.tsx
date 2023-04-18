import FollowingList from 'apps/frontend/public/data/FollowingList';
import ShopCardModal from './components/ShopCardModal';

const FollowingPage = () => {
  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto pt-4">
        <div className="text-3xl font-bold">Following List</div>
        <div className="divider" />
        <div className="flex flex-col space-y-4">
          {FollowingList.map((shop) => (
            <ShopCardModal shop={shop} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FollowingPage;
