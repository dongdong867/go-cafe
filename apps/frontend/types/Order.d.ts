type Dish = {
  name: string;
  price: number;
  count: number;
};

type Order = {
  id: string;
  customerId: string;
  tableNUmber: string;
  totalPrice: number;
  dishes: Dish[];
};
