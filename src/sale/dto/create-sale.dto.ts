import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateSaleDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  dod: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
