import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { Is } from 'sequelize-typescript';

export class CreatePropertyDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber({maxDecimalPlaces: 2}, {message: 'Price must be a number with up to 2 decimal places'})
  price: number;

  // @IsNotEmpty()
  // @IsNumber()
  // area: number;
}
