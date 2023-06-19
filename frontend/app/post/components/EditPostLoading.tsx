const EditPostLoading = () => {
  return (
    <div className="w-full h-4/6 flex justify-center place-items-center space-x-4">
      <div className="loading loading-spinner loading-lg text-primary" />
      <div className="font-bold text-xl">Loading...</div>
    </div>
  );
};

export default EditPostLoading;
