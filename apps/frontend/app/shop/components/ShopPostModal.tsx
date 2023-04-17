import PostModal from '../../components/PostModal';

type Props = {
  post: ShopPost;
};

const ShopPostModal = ({ post }: Props) => {
  return (
    <>
      <PostModal data={{ id: post.id, body: post.body }}>
        <div className="collapse-title">
          <div className="card-title text-xl font-bold">{post.title}</div>
        </div>
      </PostModal>
    </>
  );
};

export default ShopPostModal;
