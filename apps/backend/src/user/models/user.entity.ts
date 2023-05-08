import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@ObjectType()
export class User {
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
export class Token {
  @Field(() => ID)
  @IsUUID()
  token: string;
}
