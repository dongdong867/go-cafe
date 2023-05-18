import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../models/user.entity';
import { Rating } from '../../../rating/models/rating.entity';
import { StoreRating } from './store-rating-entity';

@ObjectType()
export class Store {
  @Field(() => User)
  User: User;

  @Field()
  address: string;

  @Field()
  info: string;

  @Field(() => StoreRating)
  StoreRating: StoreRating;
}
