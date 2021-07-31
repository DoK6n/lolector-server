import { PartialType } from '@nestjs/mapped-types';
import { JoinUserDto } from './join-user.dto';

export class UpdateUserDto extends PartialType(JoinUserDto) {}
