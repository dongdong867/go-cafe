import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../models/user.entity';

@ObjectType()
export class Customer {
  @Field(() => User)
  user: User;

  @Field()
  email: string;

  @Field(() => Int)
  followingCount: number;
}
