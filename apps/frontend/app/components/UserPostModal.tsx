import { FaStar } from 'react-icons/fa';
import PostModal from './PostModal';
import RatingModal from './RatingModal';
import Link from 'next/link';

type Props = {
  editable?: boolean;
  post: UserPost;
};

const UserPostModal = ({ post, editable = false }: Props) => {
  const rates = (
    <>
      <div className="w-full ">
        <RatingModal rateName="general" rateValue={post.rating.general} />
        <RatingModal
          rateName="environment"
          rateValue={post.rating.environment}
        />
        <RatingModal rateName="meals" rateValue={post.rating.meals} />
        <RatingModal rateName="attitude" rateValue={post.rating.attitude} />
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
              {post.rating.general.toFixed(1)}
            </div>
          </div>

          {/* post title */}
          <div className="card-title text-xl font-bold max-[450px]:flex-col place-items-start gap-y-0">
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
