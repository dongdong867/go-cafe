import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../models/user.entity';
import { Store } from '../../store/models/store.entity';

@ObjectType()
export class Customer extends User {
  @Field()
  email: string;

  @Field(() => Int)
  followCount: number;

  @Field(() => [Store], { nullable: 'items' })
  following: Store[];
}
