import PageTitle from "@/app/components/PageTitle";
import { Suspense } from "react";
import EditPostLoading from "../../components/EditPostLoading";
import CreateShopPostModal from "../../components/CreateShopPostModal";

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
        <CreateShopPostModal />
      </Suspense>
    </div>
  );
};

export default CreateShopPostPage;
