import PageTitle from "@/app/components/PageTitle";
import EditShopPostModal from "@/app/post/components/ShopPostModal";

type Props = {
  params: {
    postId: string;
  };
};

const UpdateShopPostPage = ({ params }: Props) => {
  return (
    <div
      className="
        w-full 
        max-w-lg 
        h-[calc(100vh-64px)] 
        max-[450px]:max-w-[350px] 
        m-auto"
    >
      <PageTitle title="Update Post" />
      <EditShopPostModal postId={params.postId} />
    </div>
  );
};

export default UpdateShopPostPage;
