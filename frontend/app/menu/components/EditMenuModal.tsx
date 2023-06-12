"use client";

import useEditMenu from "@/app/hooks/useEditMenu";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EditCategoryModal from "./CategoryModal";
import BottomButton from "@/app/components/Button/BottomButton";
import CreateCategoryModal from "./CreateCategoryModal";

const EditMenuModal = () => {
  const { categories, setCategories, editMenu } = useEditMenu();

  const [newCategoryName, setNewCategoryName] = useState("");

  const handleChange = (categoryName: string, category: Category) => {
    const newCategories = categories.map((data) => {
      if (data.categoryName === categoryName) return category;
      else return data;
    });

    setCategories(
      newCategories.filter((category) => category.dishes.length !== 0)
    );
  };

  const handleAdd = () => {
    let namePassed = true;
    if (newCategoryName.split(" ").join("").length === 0) {
      toast.error("Category Name Invalid", {
        className: "font-bold text-lg",
      });
      namePassed = false;
    } else {
      categories.forEach((category) => {
        if (namePassed) {
          if (category.categoryName === newCategoryName) {
            toast.error("Category Name Exist", {
              className: "font-bold text-lg",
            });
            namePassed = false;
          } else if (newCategoryName.split(" ").join("").length === 0) {
            toast.error("Category Name Invalid", {
              className: "font-bold text-lg",
            });
            namePassed = false;
          }
        }
      });

      if (namePassed) {
        setCategories([
          ...categories,
          {
            categoryName: newCategoryName,
            dishes: [{ dishName: "dish name", price: 0 }],
          },
        ]);
      }
    }
    setNewCategoryName("");
  };

  const handleDelete = (categoryName: string) => {
    setCategories(
      categories.filter((category) => category.categoryName !== categoryName)
    );
  };
  return (
    <>
      <CreateCategoryModal
        categoryName={newCategoryName}
        setCategoryName={setNewCategoryName}
        onSubmit={handleAdd}
      />
      <div className="space-y-4">
        {categories.map((category) => (
          <EditCategoryModal
            key={category.categoryName}
            category={category}
            handleCategoryChange={(data: Category) =>
              handleChange(category.categoryName, data)
            }
            handleDeleteCategory={() => handleDelete(category.categoryName)}
          />
        ))}
      </div>
      <div className="w-full h-24" />
      <BottomButton onClick={editMenu}>
        <span>save changes</span>
      </BottomButton>
    </>
  );
};

export default EditMenuModal;
