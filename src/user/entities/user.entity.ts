import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  mobile: string;

  @Field()
  password: string;

  @Field()
  status: boolean;
}
