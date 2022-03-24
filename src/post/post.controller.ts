import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, EditPostDto } from './dtos';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Blog')
@Controller('post')
export class PostController {
  constructor(private readonly PostService: PostService) {}

  // metodos para rutas
  @Get()
  async getMany() {
    const data = await this.PostService.getMany();
    return {
      message: 'Peticion correcta',
      data,
    };
  }
  // Path
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.PostService.getOne(id);
    return { data };
  }

  @Post()
  async createOne(@Body() dto: CreatePostDto) {
    const data = await this.PostService.createOne(dto);
    return { message: 'Post creado', data };
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: EditPostDto) {
    const data = await this.PostService.editOne(id, dto);
    return { message: 'Post editado', data };
  }
  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.PostService.deleteOne(id);
    return { message: 'Post eliminado', data };
  }
}
