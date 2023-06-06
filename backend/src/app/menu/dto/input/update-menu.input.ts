import { Field, InputType } from '@nestjs/graphql';
import { CategoryInput } from './category.input';

@InputType()
export class UpdateMenuInput {
  @Field(() => [CategoryInput])
  categories: CategoryInput[];
}
