import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  maxLength,
} from 'class-validator';

export class createAppDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  // @
  version: string;

  @IsNotEmpty()
  @IsNumber()
  // @Type(() => Number) // Transform to number
  // @Max(2024)
  year: number;

  @IsOptional()
  @IsEmail({}, { message: 'Please input a valid email' })
  email: string;
}
