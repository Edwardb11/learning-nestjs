import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { PostCategory } from '../enums/post-category.enum';
import { EnumToString } from './../helpers/enumToString';

// https://github.com/typestack/class-validator
export class CreatePostDto {
  @ApiProperty({ type: String })
  @IsString()
  title: string;

  @ApiProperty({ type: String })
  @IsString()
  slug: string;

  @ApiProperty({ type: String })
  @IsString()
  excerpt: string;

  @ApiProperty({ type: String })
  @IsString()
  content: string;

  @ApiProperty({ type: String, description: 'TECHNOLOGY | LIFESTYLE | CODING' })
  @IsNotEmpty()
  @IsEnum(PostCategory, {
    message: `Invalid option. Valids options are ${EnumToString(PostCategory)}`,
  })
  category: string;

  @ApiProperty({ type: Array })
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  status: boolean;
}
