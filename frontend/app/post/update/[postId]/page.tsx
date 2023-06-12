import PageTitle from "@/app/components/PageTitle";
import EditModal from "../../components/EditModal/Modal";
import Loading from "@/app/components/Loading/Loading";
import { Suspense } from "react";
import EditPostLoading from "../../components/EditPostLoading";

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
        <EditModal postId={params.postId} />
      </Suspense>
    </div>
  );
};

export default UpdatePostPage;
