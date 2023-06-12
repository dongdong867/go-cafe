import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import PageTitle from "../components/PageTitle";
import EditMenuModal from "./components/EditMenuModal";
import MenuLoading from "./components/MenuLoading";

const MenuPage = () => {
  return (
    <div className="w-full max-w-lg max-[450px]:w-11/12 h-full m-auto space-y-4">
      <PageTitle title="Edit Menu" />
      <Suspense fallback={<MenuLoading />}>
        <EditMenuModal />
      </Suspense>
      <Toaster />
    </div>
  );
};

export default MenuPage;
