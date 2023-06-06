import { gql, useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const query = gql`
  query SelfMenu {
    selfMenu {
      categoryName
      dishes {
        dishName
        price
      }
    }
  }
`;

const CREATE_MENU = gql`
  mutation CreateMenu($createMenuInput: CreateMenuInput!) {
    createMenu(createMenuInput: $createMenuInput)
  }
`;

const useEditMenu = () => {
  const { data }: { data: { selfMenu: Category[] } } = useSuspenseQuery(query);

  const [categories, setCategories] = useState(data.selfMenu);

  const [createMenu] = useMutation(CREATE_MENU);

  const router = useRouter();

  const editMenu = async () => {
    const create = createMenu({
      variables: {
        createMenuInput: {
          categories: categories.map((category) => ({
            name: category.categoryName,
            dishes: category.dishes.map((dish) => ({
              name: dish.dishName,
              price: dish.price,
            })),
          })),
        },
      },
    });

    await toast
      .promise(
        create,
        {
          loading: "Saving...",
          error: (error) => error.message,
          success: "Menu Saved",
        },
        {
          className: "font-bold text-lg",
        }
      )
      .then(() => router.push("/user"));
  };

  return { categories, setCategories, editMenu };
};

export default useEditMenu;
