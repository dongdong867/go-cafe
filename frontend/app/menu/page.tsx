"use client";

import { useState } from "react";
import useEditMenu from "../hooks/useEditMenu";
import toast, { Toaster } from "react-hot-toast";
import PageTitle from "../components/PageTitle";
import InputModal from "../components/Input/InputModal";
import { MdOutlineImportContacts } from "react-icons/md";
import EditCategoryModal from "./components/CategoryModal";
import BottomButton from "../components/Button/BottomButton";

const MenuPage = () => {
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
          console.log(namePassed);
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
    <div className="w-full max-w-lg max-[450px]:w-11/12 h-full m-auto space-y-4">
      <PageTitle title="Edit Menu" />
      <div>
        <div className="w-full flex justify-end">
          <label htmlFor="createCategory">
            <div className="btn btn-primary btn-wide text-white text-xl">
              create category
            </div>
          </label>
        </div>
        <label htmlFor="createCategory" className="w-max">
          <input type="checkbox" id="createCategory" className="modal-toggle" />
          <div className="modal modal-middle max-[450px]:modal-bottom">
            <div className="modal-box">
              <PageTitle title="Create Category" />
              <InputModal
                topLabelText="CATEGORY NAME"
                sideLabel={<MdOutlineImportContacts className="ml-2" />}
                value={newCategoryName}
                setValue={setNewCategoryName}
              />
              <div className="modal-action">
                <label
                  htmlFor="createCategory"
                  onClick={handleAdd}
                  className="btn btn-primary text-white"
                >
                  create
                </label>
              </div>
            </div>
          </div>
        </label>
      </div>
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
      <Toaster />
    </div>
  );
};

export default MenuPage;
