import { InputType, Field, Int } from '@nestjs/graphql';
import { CategoryInput } from './category.input';

@InputType()
export class CreateMenuInput {
  @Field(() => [CategoryInput])
  categories: CategoryInput[];
}
