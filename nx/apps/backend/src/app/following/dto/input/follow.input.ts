import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FollowInput {
  @Field()
  storeAccount: string;
}
