import PageTitle from "@/app/components/PageTitle";
import EditPostLoading from "@/app/post/components/EditPostLoading";
import EditShopPostModal from "@/app/post/components/ShopPostModal";
import { Suspense } from "react";

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
      <Suspense fallback={<EditPostLoading />}>
        <EditShopPostModal postId={params.postId} />
      </Suspense>
    </div>
  );
};

export default UpdateShopPostPage;
