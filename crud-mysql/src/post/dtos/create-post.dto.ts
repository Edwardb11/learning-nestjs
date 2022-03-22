import { IsBoolean, IsString, Length } from 'class-validator';
import { PostCategory } from '../enums/post-category.enum';
// https://github.com/typestack/class-validator
export class CreatePostDto {
  @IsString()
  title: string;
  slug: string;
  @IsString()
  excerpt: string;
  @IsString()
  content: string;
  @IsString()
  category: PostCategory;
  @IsString()
  tags: string[];
  @IsBoolean()
  status: boolean;
}
