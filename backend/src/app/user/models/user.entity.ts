import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Avatar } from './avatar.entity';

@ObjectType()
export class User {
  @Field()
  account: string;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field(() => Int)
  postCount: number;

  @Field(() => Avatar)
  avatar: Avatar;
}
