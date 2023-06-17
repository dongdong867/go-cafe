import admin from 'firebase-admin';

type OrderType = {
  id: string;
  customer_id: string;
  store_id: string;
  table_number: string;
  orders: {
    dish_name: string;
    count: number;
    price: number;
  }[];
  total_price: number;
  finished: boolean;
  create_at: admin.firestore.FieldValue;
  update_at: admin.firestore.FieldValue;
};
