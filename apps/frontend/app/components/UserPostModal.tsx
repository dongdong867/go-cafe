import { FaStar } from 'react-icons/fa';
import PostModal from './PostModal';
import RatingModal from './RatingModal';
import Link from 'next/link';

type Props = {
  editable?: boolean;
  customerPost: UserPost;
};

const UserPostModal = ({ customerPost, editable = false }: Props) => {
  const rates = (
    <>
      <div className="w-full ">
        <RatingModal
          rateName="general"
          rateValue={customerPost.rating.general}
        />
        <RatingModal
          rateName="environment"
          rateValue={customerPost.rating.environment}
        />
        <RatingModal rateName="meals" rateValue={customerPost.rating.meals} />
        <RatingModal
          rateName="attitude"
          rateValue={customerPost.rating.attitude}
        />
      </div>
    </>
  );

  return (
    <>
      <PostModal
        editable={editable}
        data={{ id: customerPost.id, body: customerPost.post.body }}
        rates={rates}
      >
        <div className="collapse-title">
          {/* stars */}
          <div className="flex items-center gap-x-1 text-base">
            <FaStar className="text-accent" />
            <div className="font-semibold">
              {customerPost.rating.general.toFixed(1)}
            </div>
          </div>

          {/* post title */}
          <div className="card-title text-xl font-bold max-[450px]:flex-col place-items-start gap-y-0">
            {customerPost.customer.user.name}
            <Link
              href={`/shop/${customerPost.store.user.account}`}
              className="z-10 link link-primary"
            >
              @{customerPost.store.user.name}
            </Link>
          </div>
        </div>
      </PostModal>
    </>
  );
};

export default UserPostModal;
