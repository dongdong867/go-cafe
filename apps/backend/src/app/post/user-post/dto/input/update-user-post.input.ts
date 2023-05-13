import { Field, InputType } from '@nestjs/graphql';
import { CreateUserPostInput } from './create-user-post.input';

@InputType()
export class UpdateUserPostInput extends CreateUserPostInput {
  @Field()
  id: string;
}
