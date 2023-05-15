import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class MenuInput {
  @Field(() => [CategoryInput])
  categories: CategoryInput[];
}

@InputType()
class CategoryInput {
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
