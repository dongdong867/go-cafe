type OrderDish = {
  name: string;
  price: number;
  count: number;
};

type Order = {
  id: string;
  customerId: string;
  tableNumber: string;
  totalPrice: number;
  finished: boolean;
  dishes: OrderDish[];
};
