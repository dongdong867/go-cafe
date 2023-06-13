const MenuLoading = () => {
  return (
    <div className="w-full h-[calc(100vh-270px)] flex justify-center place-items-center space-x-4">
      <div className="loading loading-spinner loading-lg text-primary" />
      <div className="font-bold text-xl">Shopping Cart Loading...</div>
    </div>
  );
};

export default MenuLoading;
