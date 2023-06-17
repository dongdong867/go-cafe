import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetStoresArgs {
  @Field()
  query: string;
}
