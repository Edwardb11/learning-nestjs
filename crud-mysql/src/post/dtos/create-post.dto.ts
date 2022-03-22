import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';
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

  @IsEnum(PostCategory, {
    message: `Opcion invalida. Las opciones correctas son ${EnumToString(
      PostCategory,
    )}`,
  })
  category: PostCategory;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsBoolean()
  status: boolean;
}
