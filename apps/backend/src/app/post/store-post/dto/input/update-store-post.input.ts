import { CreateStorePostInput } from './create-store-post.input';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateStorePostInput extends CreateStorePostInput {
  @Field()
  id: string;
}
