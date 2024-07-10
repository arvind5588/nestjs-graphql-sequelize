import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  mobile: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsBoolean()
  status: boolean;
}
