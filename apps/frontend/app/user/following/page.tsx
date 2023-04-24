import FollowingList from 'apps/frontend/public/data/FollowingList';
import ShopCardModal from './components/ShopCardModal';
import PageTitle from '../../components/PageTitle';

const FollowingPage = () => {
  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto">
        <PageTitle title="Following List" />
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
