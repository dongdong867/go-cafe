"use client";

const SearchBarLoading = () => {
  return (
    <div className="w-full h-20 flex justify-center place-items-center space-x-4">
      <div className="loading loading-spinner loading-lg text-primary" />
      <div className="font-bold text-xl">Searching...</div>
    </div>
  );
};

export default SearchBarLoading;
