import { PostCategory } from '../enums/post-category.enum';

export class CreatePostDto {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: PostCategory;
  tags: string[];
  status: boolean;
}
