import { FaStar } from 'react-icons/fa';
import PostModal from './PostModal';
import RatingModal from './RatingModal';

type Props = {
  editable?: boolean;
  post: UserPost;
};

const UserPostModal = ({ post, editable = false }: Props) => {
  const rates = (
    <>
      <div className="w-full ">
        <RatingModal rateName="general" rateValue={post.stars.generalStar} />
        <RatingModal rateName="rate1" rateValue={post.stars.starType1} />
        <RatingModal rateName="rate2" rateValue={post.stars.starType2} />
      </div>
    </>
  );
  return (
    <>
      <PostModal
        editable={editable}
        data={{ id: post.id, body: post.body }}
        rates={rates}
      >
        <div className="collapse-title">
          {/* stars */}
          <div className="flex items-center gap-x-1 text-base">
            <FaStar className="text-accent" />
            <div className="font-semibold">
              {post.stars.generalStar.toFixed(1)}
            </div>
          </div>

          {/* post title */}
          <div className="card-title text-xl font-bold">
            {post.user.userName}
            <Link
              href={`/shop/${post.coffeeShop.coffeeShopId}`}
              className="z-10 link link-primary"
            >
              @{post.coffeeShop.coffeeShopName}
            </Link>
          </div>
        </div>
      </PostModal>
    </>
  );
};

export default UserPostModal;
