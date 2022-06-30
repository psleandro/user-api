import { Exclude, Expose } from 'class-transformer';
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

  @Expose({
    name: 'senha',
  })
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({ message: 'password field is mandatory' })
  password: string;

  @Expose({
    name: 'nomeCompleto',
  })
  @IsNotEmpty({
    message: 'fullname field is mandatory',
  })
  @IsString()
  fullname: string;

  @Expose({
    name: 'joinDate',
  })
  enterDate: Date;
}
