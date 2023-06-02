import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Menu {
  @Field(() => [Category], { nullable: 'items' })
  categories: Category[];
}

@ObjectType()
export class Category {
  @Field()
  category_name: string;

  @Field(() => [Dish])
  dishes: Dish[];
}

@ObjectType()
export class Dish {
  @Field()
  dish_name: string;

  @Field(() => Int)
  price: number;
}
