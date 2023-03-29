import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator';
import { Match } from '../decorators/match.decorator';

export class RegisterDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsEmail()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  @IsOptional()
  email: string;

  @MinLength(5)
  @IsString()
  @MaxLength(20)
  password: string;

  @IsString()
  @Match('password')
  confirmPassword: string;

  test: string;
}

export class LoginDTO {}
