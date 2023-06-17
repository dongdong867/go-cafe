import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  categoryName: string;

  @Field(() => [Dish])
  dishes: Dish[];
}

@ObjectType()
export class Dish {
  @Field()
  dishName: string;

  @Field(() => Int)
  price: number;
}
