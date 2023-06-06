'use client';

import { useId, useState } from 'react';
import EditDishModal from './DishModal';
import toast from 'react-hot-toast';
import PageTitle from '@/components/PageTitle';
import InputModal from '@/components/Input/InputModal';
import { MdOutlineImportContacts } from 'react-icons/md';
import { HiCurrencyDollar } from 'react-icons/hi';

type Props = {
  category: Category;
  handleCategoryChange: (category: Category) => void;
  handleDeleteCategory: () => void;
};

const EditCategoryModal = ({
  category,
  handleCategoryChange,
  handleDeleteCategory,
}: Props) => {
  const id = useId();
  const [dishName, setDishName] = useState(undefined as string);
  const [price, setPrice] = useState(1);

  const handleAdd = () => {
    let dishPass = true;
    if (!dishName || dishName.split(' ').join('').length === 0) {
      toast.error('Invalid Dish Name', {
        className: 'font-bold text-lg',
      });
      dishPass = false;
    } else if (price < 1) {
      toast.error('Invalid price', {
        className: 'font-bold text-lg',
      });
      dishPass = false;
    }

    category.dishes.forEach((dish) => {
      if (dishPass) {
        if (dish.dishName === dishName) {
          toast.error('Category Name Exist', {
            className: 'font-bold text-lg',
          });
          dishPass = false;
        }
      }
    });

    if (dishPass) {
      const newCategory = {
        ...category,
        dishes: [
          ...category.dishes,
          {
            dishName: dishName,
            price: price,
          },
        ],
      };

      handleCategoryChange(newCategory);
    }
    setDishName(undefined);
    setPrice(0);
  };

  const handleChange = (
    dish: MenuDish,
    newDishName: string,
    price: number,
    setNewDishName: React.Dispatch<React.SetStateAction<string>>,
    setPrice: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let dishPass = true;
    if (newDishName.length === 0) {
      toast.error('Invalid name', {
        className: 'font-bold text-lg',
      });
      dishPass = false;
    }
    if (price < 1 || !price) {
      toast.error('Invalid price', {
        className: 'font-bold text-lg',
      });
      dishPass = false;
    }

    category.dishes.forEach((data) => {
      if (data.dishName === newDishName && dish.dishName !== newDishName) {
        toast.error('Category Name Exist', {
          className: 'font-bold text-lg',
        });
        dishPass = false;
      }
    });

    if (dishPass) {
      const newCategory = {
        ...category,
        dishes: category.dishes.map((data) => {
          if (data.dishName === dish.dishName) {
            return {
              dishName: newDishName,
              price: price,
            };
          } else return data;
        }),
      };

      handleCategoryChange(newCategory);
    } else {
      setNewDishName(dish.dishName);
      setPrice(dish.price);
    }
  };

  const handleDeleteDish = (dishName: string) => {
    const newCategory = {
      ...category,
      dishes: category.dishes.filter((dish) => dish.dishName !== dishName),
    };

    handleCategoryChange(newCategory);
  };

  return (
    <div className="w-full p-4 rounded-box shadow-basic">
      <div className="mb-4 font-bold">{category.categoryName}</div>
      {category.dishes.map((dish) => (
        <div key={dish.dishName}>
          <EditDishModal
            dish={dish}
            handleDishChange={(
              newDishName: string,
              price: number,
              setNewDishName: React.Dispatch<React.SetStateAction<string>>,
              setPrice: React.Dispatch<React.SetStateAction<number>>
            ) =>
              handleChange(dish, newDishName, price, setNewDishName, setPrice)
            }
            handleDelete={() => handleDeleteDish(dish.dishName)}
          />
        </div>
      ))}
      <div className="w-full space-x-2 mt-4 flex justify-end">
        <label htmlFor={id}>
          <div className="btn btn-primary text-white">add dish</div>
          <input type="checkbox" id={id} className="modal-toggle" />
          <div className="modal modal-middle max-[450px]:modal-bottom">
            <div className="modal-box">
              <PageTitle title="Create Dish" />
              <InputModal
                topLabelText="DISH NAME"
                sideLabel={<MdOutlineImportContacts className="ml-2" />}
                value={dishName}
                setValue={setDishName}
              />
              <InputModal
                type="number"
                topLabelText="PRICE"
                sideLabel={<HiCurrencyDollar className="ml-2" />}
                numberValue={price}
                setNumberValue={setPrice}
              />
              <div className="modal-action">
                <label
                  htmlFor={id}
                  onClick={handleAdd}
                  className="btn btn-primary text-white"
                >
                  Create
                </label>
              </div>
            </div>
          </div>
        </label>
        <button
          onClick={handleDeleteCategory}
          className="btn btn-error text-white"
        >
          delete category
        </button>
      </div>
    </div>
  );
};

export default EditCategoryModal;
