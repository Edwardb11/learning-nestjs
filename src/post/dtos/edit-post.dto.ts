import { CreatePostDto } from './create-post.dto';
import { PartialType, OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

// Literalemente es la misma clase que Create Post solo que con PartialType los hace opcionales los campos
// Ignorar slug
export class EditPostDto extends PartialType(
  OmitType(CreatePostDto, ['slug'] as const),
) {}
