import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetMenuArgs {
  @Field()
  @IsNotEmpty()
  storeAccount: string;
}
