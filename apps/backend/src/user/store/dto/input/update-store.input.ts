import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateStoreInput {
  @Field()
  @IsNotEmpty()
  account: string;

  @Field({ nullable: true })
  @IsOptional()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  phone: string;

  @Field({ nullable: true })
  @IsOptional()
  address: string;

  @Field({ nullable: true })
  @IsOptional()
  info: string;

  @Field()
  @IsNotEmpty()
  @IsUUID()
  token: string;
}
