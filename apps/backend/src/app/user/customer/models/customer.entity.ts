import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../models/user.entity';
import { Store } from '../../store/models/store.entity';

@ObjectType()
export class Customer {
  @Field(() => User)
  User: User;

  @Field()
  email: string;

  @Field(() => Int)
  followingCount: number;
}
