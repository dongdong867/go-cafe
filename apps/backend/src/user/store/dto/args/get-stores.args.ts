import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetStoresArgs {
  @Field(() => [String])
  @IsNotEmpty()
  accounts: string[];
}
