import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from '../../models/post.entity';
import { Rating } from '../../../rating/models/rating.entity';
import { Store } from '../../../user/store/models/store.entity';

@ObjectType()
export class CustomerPost {
  @Field(() => Post)
  post: Post;

  @Field(() => Rating)
  rating: Rating;

  @Field(() => Store)
  store: Store;
}
