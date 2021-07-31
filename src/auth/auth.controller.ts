import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  async createToken(@Body() user): Promise<any> {
    return await this.authService.createToken(user);
  }

  @Get('data')
  @UseGuards(AuthGuard('jwt'))
  findOne() {
    // return await this.authService.validateuser()
  }
}
