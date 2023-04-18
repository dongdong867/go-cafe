import EditModal from '../../components/EditModal';

const UpdatePostPage = () => {
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
        <EditModal buttonContent="update" />
      </div>
    </>
  );
};

export default UpdatePostPage;
