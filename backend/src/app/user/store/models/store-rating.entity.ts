import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Rating } from '../../../models/rating.entity';

@ObjectType()
export class StoreRating {
  @Field(() => Rating)
  rating: Rating;

  @Field(() => Int)
  postCount: number;
}
