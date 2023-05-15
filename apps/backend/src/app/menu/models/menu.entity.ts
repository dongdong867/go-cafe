import { Type } from '@nestjs/common';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Menu {
  @Field(() => [Category])
  categories: Category[];
}

@ObjectType()
export class Category {
  @Field()
  name: string;

  @Field(() => [Dish])
  dishes: Dish[];
}

@ObjectType()
export class Dish {
  @Field()
  name: string;

  @Field(() => Int)
  price: number;
}
