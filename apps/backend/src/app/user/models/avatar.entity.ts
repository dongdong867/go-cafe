import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Avatar {
  @Field()
  data: string;
}
