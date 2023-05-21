import * as admin from 'firebase-admin';

type MenuType = {
  id: string;
  store_id: string;
  menu: {
    category_name: string;
    dishes: {
      dish_name: string;
      price: number;
    }[];
  }[];
  update_at: admin.firestore.FieldValue;
};
