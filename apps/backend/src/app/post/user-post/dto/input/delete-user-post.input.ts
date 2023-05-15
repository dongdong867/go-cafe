import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteUserPostInput {
  @Field()
  postId: string;
}
