import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  public createUser(@Body() user: User): User {
    return this.userService.createUser(user);
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
