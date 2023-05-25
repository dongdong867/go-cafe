import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Rating {
  @Field(() => Float)
  general: number;

  @Field(() => Float)
  environment: number;

  @Field(() => Float)
  meals: number;

  @Field(() => Float)
  attitude: number;
}
