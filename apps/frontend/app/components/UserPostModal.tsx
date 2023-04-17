import { FaStar } from 'react-icons/fa';
import PostModal from './PostModal';

type Props = {
  editable?: boolean;
  post: UserPost;
};

const UserPostModal = ({ post, editable = false }: Props) => {
  return (
    <>
      <PostModal editable={editable} data={{ id: post.id, body: post.body }}>
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
            {post.user.userName} @{post.coffeeShop.coffeeShopName}
          </div>
        </div>
      </PostModal>
    </>
  );
};

export default UserPostModal;
