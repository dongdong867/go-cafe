const Loading = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center place-items-center space-x-4">
      <div className="loading loading-spinner loading-lg text-primary" />
      <div className="font-bold text-xl">Loading...</div>
    </div>
  );
};

export default Loading;
