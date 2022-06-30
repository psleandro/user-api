import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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
    const user = this.users.find((u) => u.username === name);

    if (!user) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found.',
      });
    }

    return user;
  }
}
