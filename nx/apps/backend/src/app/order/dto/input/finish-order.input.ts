import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FinishOrderInput {
  @Field()
  id: string;
}
