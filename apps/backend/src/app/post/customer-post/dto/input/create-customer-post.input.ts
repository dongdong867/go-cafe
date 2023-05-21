import { InputType, Field } from '@nestjs/graphql';
import { PostRatingInput } from './post-rating.input';

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
