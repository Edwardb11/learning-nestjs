import { CreatePostDto } from './create-post.dto';
import { PartialType } from '@nestjs/swagger';

// Literalemente es la misma clase que Create Post solo que con PartialType los hace opcionales los campos
export class EditPostDto extends PartialType(CreatePostDto) {}
