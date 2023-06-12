import PageTitle from "@/app/components/PageTitle";
import { Suspense } from "react";
import EditPostLoading from "../../components/EditPostLoading";
import UpdateUserPostModal from "../../components/EditModal/UpdateUserPostModal";

type Props = {
  params: {
    postId: string;
  };
};

const UpdatePostPage = ({ params }: Props) => {
  return (
    <div
      className="
          w-full max-w-lg 
          h-[calc(100vh-64px)] 
          max-[450px]:max-w-[350px] 
          m-auto"
    >
      <PageTitle title="Update Post" />
      <Suspense fallback={<EditPostLoading />}>
        <UpdateUserPostModal postId={params.postId} />
      </Suspense>
    </div>
  );
};

export default UpdatePostPage;
