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
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  @IsNotEmpty()
  @IsEnum(PostCategory, {
    message: `Invalid option. Valids options are ${EnumToString(PostCategory)}`,
  })
  category: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsBoolean()
  status: boolean;
}
