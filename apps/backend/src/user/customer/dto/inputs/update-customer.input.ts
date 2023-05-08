import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsEmail, IsUUID } from 'class-validator';

@InputType()
export class UpdateCustomerInput {
  @Field()
  @IsNotEmpty()
  account: string;

  @Field()
  @IsOptional()
  name?: string;

  @Field()
  @IsOptional()
  phone?: string;

  @Field()
  @IsEmail()
  @IsOptional()
  email?: string;

  // TODO: FEATURE WAITING
  //
  // @Field()
  // @IsOptional()
  // avatar: string

  @Field()
  @IsUUID()
  @IsNotEmpty()
  token: string;
}
