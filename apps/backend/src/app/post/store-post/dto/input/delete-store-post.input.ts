import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteStorePostInput {
  @Field()
  id: string;
}
