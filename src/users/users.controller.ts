import { Controller, Get, Post, Body, Param, Request, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { JoinUserDto } from './dto/join-user.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  private readonly logger = new Logger('UsersController');

  @Post('join')
  create(@Body() user: JoinUserDto) {
    return this.UsersService.create(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req) {
    return req.user;
  }

  @Post('login')
  findOne(@Body() user: JoinUserDto) {
    // this.logger.log(email);
    return this.UsersService.findOne(user.email);
  }
}
