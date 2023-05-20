import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field()
  id: string;

  @Field()
  customer_id: string;

  @Field()
  tableNumber: string;

  @Field(() => Int)
  totalPrice: number;

  @Field(() => Boolean)
  finished: boolean;

  @Field(() => [OrderDish])
  dishes: OrderDish[];
}

@ObjectType()
class OrderDish {
  @Field()
  name: string;

  @Field(() => Int)
  count: number;

  @Field(() => Int)
  price: number;
}
