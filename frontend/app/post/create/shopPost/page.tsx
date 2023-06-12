import PageTitle from "@/app/components/PageTitle";
import EditShopPostModal from "../../components/ShopPostModal";
import { Suspense } from "react";
import EditPostLoading from "../../components/EditPostLoading";

const CreateShopPostPage = () => {
  return (
    <div
      className="
        w-full max-w-lg 
        h-[calc(100vh-64px)] 
        max-[450px]:max-w-[350px] 
        m-auto"
    >
      <PageTitle title="Create Shop Post" />
      <Suspense fallback={<EditPostLoading />}>
        <EditShopPostModal />
      </Suspense>
    </div>
  );
};

export default CreateShopPostPage;
