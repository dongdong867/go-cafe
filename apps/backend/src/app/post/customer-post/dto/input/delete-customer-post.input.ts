import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteCustomerPostInput {
  @Field()
  postId: string;
}
