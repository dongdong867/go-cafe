import * as admin from 'firebase-admin';

type MenuType = {
  id: string;
  store_id: string;
  menu: CategoryType[];
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
