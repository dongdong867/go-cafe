import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field()
  storeAccount: string;

  @Field()
  tableNumber: string;

  @Field(() => Int)
  totalPrice: number;

  @Field(() => [OrderDishInput])
  dishes: OrderDishInput[];
}

@InputType()
class OrderDishInput {
  @Field()
  name: string;

  @Field(() => Int)
  count: number;

  @Field(() => Int)
  price: number;
}
