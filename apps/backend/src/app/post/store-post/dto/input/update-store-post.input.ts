import { CreateStorePostInput } from './create-store-post.input';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateStorePostInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  body: string;
}
