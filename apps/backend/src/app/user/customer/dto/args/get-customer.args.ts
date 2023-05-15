import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@ArgsType()
export class GetCustomerArgs {
  @Field()
  @IsNotEmpty()
  account: string;

  @Field()
  @IsUUID()
  @IsNotEmpty()
  token: string;
}
