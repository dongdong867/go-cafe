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
export class CreateUserPostInput {
  @Field()
  storeAccount: string;

  @Field()
  body: string;

  // TODO: FEATURE WAITING
  //
  // @Field(() => [Picture])
  // pictures: Picture[]

  @Field(() => PostRatingInput)
  rating: PostRatingInput;
}
