import { Field, InputType } from '@nestjs/graphql';
import { CategoryInput } from './category.input';

@InputType()
export class UpdateMenuInput {
  @Field()
  id: string;

  @Field(() => [CategoryInput])
  categories: CategoryInput[];
}
