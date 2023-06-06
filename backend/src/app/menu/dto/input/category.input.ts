import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CategoryInput {
  @Field()
  name: string;

  @Field(() => [DishInput])
  dishes: DishInput[];
}

@InputType()
class DishInput {
  @Field()
  name: string;

  @Field(() => Int)
  price: number;
}
