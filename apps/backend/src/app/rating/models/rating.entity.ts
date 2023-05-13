import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Rating {
  @Field(() => Int)
  general: number;

  @Field(() => Int)
  environment: number;

  @Field(() => Int)
  meals: number;

  @Field(() => Int)
  attitude: number;
}
