import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  public createUser(@Body() user) {
    return this.userService.createUser(user);
  }

  @Get()
  public getUsers() {
    return this.userService.getUsers();
  }
}
