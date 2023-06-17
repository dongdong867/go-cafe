import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetCustomerPostArgs {
  @Field(() => ID)
  postId: string;
}
