import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from '../../models/post.entity';
import { Rating } from '../../../rating/models/rating.entity';

@ObjectType()
export class UserPost extends Post {
  @Field()
  userAccount: string;

  @Field(() => Rating)
  rating: Rating;
}
