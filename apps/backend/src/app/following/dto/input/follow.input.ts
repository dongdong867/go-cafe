import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class FollowInput {
  @Field()
  @IsNotEmpty()
  account: string;

  @Field()
  @IsNotEmpty()
  storeAccount: string;

  @Field()
  @IsNotEmpty()
  token: string;
}
