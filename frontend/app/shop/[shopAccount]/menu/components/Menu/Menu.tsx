"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import MenuNavigator from "../MenuNavigator";
import MenuCategory from "./MenuCategory";
import { useRouter } from "next/navigation";
import BottomButton from "@/app/components/Button/BottomButton";

type GraphQLType = {
  menu: {
    categoryName: string;
    dishes: {
      dishName: string;
      price: number;
    }[];
  }[];
};

const query = gql`
  query Menu($storeAccount: String!) {
    menu(storeAccount: $storeAccount) {
      categoryName
      dishes {
        dishName
        price
      }
    }
  }
`;

type Props = {
  shopAccount: string;
};

const Menu = ({ shopAccount }: Props) => {
  const router = useRouter();

  const { data }: { data: GraphQLType } = useSuspenseQuery(query, {
    variables: {
      storeAccount: shopAccount,
    },
  });

  if (data.menu.length === 0)
    return (
      <div className="w-full h-[calc(100vh-270px)] bg- z-60 flex flex-col justify-center place-items-center space-y-4 font-bold max-[450px]:font-semibold text-xl">
        <div className="flex place-items-center">
          <div className="text-error font-bold">404</div>
          <div className="divider divider-horizontal h-8 flex place-self-center mx-1" />
          <div className="">No Menu Found</div>
        </div>
        <div className="z-60">
          <BottomButton onClick={() => router.back()}>
            <span>back to shop page</span>
          </BottomButton>
        </div>
      </div>
    );

  return (
    <>
      <MenuNavigator
        categoryNameList={data.menu.map((category) => category.categoryName)}
      />
      <div
        className="
          menu 
          bg-base-100 
          w-full h-full 
          rounded-box 
          px-4 py-8 
          shadow-[0_2px_15px_rgba(0,0,0,0.25)]"
      >
        {data.menu.map((category) => (
          <MenuCategory
            key={category.categoryName}
            name={category.categoryName}
            dishes={category.dishes}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
