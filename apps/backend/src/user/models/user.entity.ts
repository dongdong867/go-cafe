import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class PublicUser {
  @Field()
  name: string;

  @Field()
  phone: string;

  @Field(() => Int)
  postCount: number;

  // TODO: FEATURE WAITING
  //
  // @Field()
  // avatarId: string
}

@ObjectType()
export class User extends PublicUser {
  @Field(() => ID)
  id: string;

  @Field()
  account: string;

  @Field()
  saltedPassword: string;

  @Field()
  token: string;
}
