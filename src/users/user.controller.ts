import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  public createUser(@Body() user: User): NestResponse {
    const userCreated = this.userService.createUser(user);
    return new NestResponseBuilder()
      .setStatus(HttpStatus.CREATED)
      .setHeaders({
        Location: `/users/${userCreated.username}`,
      })
      .setBody(userCreated)
      .build();
  }

  @Get()
  public getUsers() {
    return this.userService.getUsers();
  }

  @Get(':name')
  public getUserByName(@Param('name') name): User {
    return this.userService.getUserByName(name);
  }
}
