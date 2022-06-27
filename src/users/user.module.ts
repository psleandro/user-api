import { Module } from '@nestjs/common';
import { IsUniqueUsernameConstraint } from './isUniqueUsername.validator';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, IsUniqueUsernameConstraint],
})
export class UserModule { }
