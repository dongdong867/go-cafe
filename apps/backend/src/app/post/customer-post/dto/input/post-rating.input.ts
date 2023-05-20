import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PostRatingInput {
  @Field(() => Int)
  general: number;

  @Field(() => Int)
  environment: number;

  @Field(() => Int)
  meals: number;

  @Field(() => Int)
  attitude: number;
}
