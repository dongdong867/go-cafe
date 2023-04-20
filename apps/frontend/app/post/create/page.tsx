import CreatePostModal from '../components/CreatePostModal';
import EditModal from '../components/EditModal';

const CreatePostPage = () => {
  return (
    <>
      <div
        className="
          w-full max-w-lg 
          h-[calc(100vh-64px)] 
          max-[450px]:max-w-[350px] 
          m-auto 
          overflow-scroll"
      >
        <CreatePostModal />
      </div>
    </>
  );
};

export default CreatePostPage;
