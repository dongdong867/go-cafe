import PageTitle from "@/app/components/PageTitle";
import { Suspense } from "react";
import EditPostLoading from "../components/EditPostLoading";
import CreateUserPostModal from "../components/CreateUserPostModal";

const CreatePostPage = () => {
  return (
    <div
      className="
          w-full max-w-lg 
          h-[calc(100vh-64px)] 
          max-[450px]:max-w-[350px] 
          m-auto"
    >
      <PageTitle title="Create Post" />
      <Suspense fallback={<EditPostLoading />}>
        <CreateUserPostModal />
      </Suspense>
    </div>
  );
};

export default CreatePostPage;
