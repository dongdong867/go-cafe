import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from '../../models/post.entity';
import { Store } from '../../../user/store/models/store.entity';
import { Customer } from '../../../user/customer/models/customer.entity';
import { Rating } from '../../../models/rating.entity';

@ObjectType()
export class CustomerPost {
  @Field(() => ID)
  id: string;

  @Field(() => Post)
  post: Post;

  @Field(() => Rating)
  rating: Rating;

  @Field(() => Store)
  store: Store;

  @Field(() => Customer)
  customer: Customer;
}
