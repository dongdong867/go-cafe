import { Suspense } from "react";
import MenuLoading from "./components/MenuLoading";

type Props = {
  children: React.ReactNode;
};

const MenuLayout = ({ children }: Props) => {
  return (
    <Suspense fallback={<MenuLoading />}>
      <div>{children}</div>
    </Suspense>
  );
};

export default MenuLayout;
