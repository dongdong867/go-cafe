import PostModal from "@/app/components/PostModal";

type Props = {
  editable?: boolean;
  post: ShopPost;
};

const ShopPostModal = ({ editable = false, post }: Props) => {
  return (
    <>
      <PostModal
        editable={editable}
        role="shop"
        data={{
          id: post.id,
          body: post.post.body,
          pictures: post.post.postPicture,
        }}
        rates={<></>}
      >
        <div className="collapse-title">
          <div className="card-title text-xl font-bold">{post.title}</div>
        </div>
      </PostModal>
    </>
  );
};

export default ShopPostModal;
