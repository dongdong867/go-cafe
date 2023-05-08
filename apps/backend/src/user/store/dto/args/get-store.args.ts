import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetStoreArgs {
  @Field()
  @IsNotEmpty()
  account: string;
}
