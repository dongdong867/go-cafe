import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UnfollowInput {
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
