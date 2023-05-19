import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
class PostRatingInput {
  @Field(() => Int)
  general: number;

  @Field(() => Int)
  environment: number;

  @Field(() => Int)
  meals: number;

  @Field(() => Int)
  attitude: number;
}

@InputType()
export class CreateCustomerPostInput {
  @Field()
  storeAccount: string;

  @Field()
  body: string;

  @Field(() => [String])
  pictures: string[];

  @Field(() => PostRatingInput)
  rating: PostRatingInput;
}
