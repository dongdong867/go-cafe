import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@ArgsType()
export class GetCustomerArgs {
  @Field()
  @IsUUID()
  @IsNotEmpty()
  token: string;
}
