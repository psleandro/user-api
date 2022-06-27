import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  public createUser(user): User {
    this.users.push(user);

    return user;
  }

  public getUsers(): User[] {
    return this.users;
  }

  public getUserByName(name: string): User {
    return this.users.find((u) => u.username === name);
  }
}
