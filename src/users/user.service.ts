import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  public createUser(user) {
    this.users.push(user);

    return user;
  }

  public getUsers() {
    return this.users;
  }
}
