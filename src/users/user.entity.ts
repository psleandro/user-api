import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty({ message: 'username field is mandatory' })
  @IsString({
    message: 'username need be a string',
  })
  username: string;

  @IsEmail(
    {},
    {
      message: 'email field need be send with correctly syntax',
    },
  )
  email: string;

  @IsNotEmpty({ message: 'password field is mandatory' })
  password: string;

  @IsNotEmpty({
    message: 'fullname field is mandatory',
  })
  @IsString()
  fullname: string;

  enterDate: Date;
}
