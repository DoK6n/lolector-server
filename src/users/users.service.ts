import { Injectable, Logger } from '@nestjs/common';
import { JoinUserDto } from './dto/join-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly logger = new Logger('UsersService');

  private readonly users = [
    {
      email: 'ehrbs@email.com',
      password: '$2b$10$DZOeRzWMirm0i8smvkdjRuGKcEgXuN8Dm4wNC5r8w2Z/hYNptdjvm',
    },
    {
      email: 'test@email.com',
      password: '$2b$10$DZOeRzWMirm0i8smvkdjRuGKcEgXuN8Dm4wNC5r8w2Z/hYNptdjvm',
    },
    {
      email: 'lol@email.com',
      password: '$2b$10$QpWWe4yTqgNYiJmAEHBhv.yeF2UY1BhofYOuUtZG5hkKsDyf8P.pq',
    },
  ];
  create(user: JoinUserDto) {
    const { email, password } = Object.assign(user);

    const hashed = bcrypt.hashSync(password, 10);
    return { email: email, password: hashed };
  }

  findOne(email: string) {
    this.logger.log(email);
    const emailCheck = this.users.filter(user => user.email == email);
    this.logger.log(emailCheck[0]);

    return { result: emailCheck[0].email, success: 'true' };
  }
}
