import { Field, ID, InputType } from '@nestjs/graphql';
import { PostRatingInput } from './post-rating.input';

@InputType()
export class UpdateCustomerPostInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  body: string;

  @Field(() => PostRatingInput, { nullable: true })
  rating: PostRatingInput;
}
