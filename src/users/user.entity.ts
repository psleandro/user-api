import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUniqueUsername } from './isUniqueUsername.validator';

export class User {
  id: number;

  @IsUniqueUsername({
    message: 'Username is already in use',
  })
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
