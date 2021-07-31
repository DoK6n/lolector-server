import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { JoinUserDto } from 'src/users/dto/join-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async createToken(user: JoinUserDto) {
    const userInfoBcrypt = this.userService.create(user);
    const userPayload: JwtPayload = userInfoBcrypt;
    const accessToken = this.jwtService.sign(userPayload);
    console.log(userInfoBcrypt);

    return {
      email: userInfoBcrypt.email,
      password: userInfoBcrypt.password,
      accessToken: accessToken,
    };
  }

  async validateuser(payload: JwtPayload): Promise<any> {
    console.log(`validate account ${payload}`);
    console.log(`payload email : ${payload.email}`);

    // const user = await this.userService.findOne(payload.email);
    // if (!user || (user && !compare(payload.password, user.password))) return null;

    // return user;
    // return {};
  }
}
