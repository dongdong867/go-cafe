import * as admin from 'firebase-admin';

type MenuType = {
  id: string;
  categories: CategoryType[];
  update_at: admin.firestore.FieldValue;
};

type CategoryType = {
  category_name: string;
  dishes: DishType[];
};

type DishType = {
  dish_name: string;
  price: number;
};
