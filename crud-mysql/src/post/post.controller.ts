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
  getOne(@Param('id', ParseIntPipe) id: number) {
    this.PostService.getOne(id);
  }
  @Post()
  createOne(@Body() dto: CreatePostDto) {
    return this.PostService.createOne(dto);
  }

  @Put(':id')
  editOne(@Param('id') id: number, @Body() dto: EditPostDto) {
    return this.PostService.editOne(id, dto);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.PostService.deleteOne(id);
  }
}
