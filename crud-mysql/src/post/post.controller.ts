import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, EditPostDto } from './dtos';

@Controller('post')
export class PostController {
  // metodos para rutas
  @Get()
  getMany() {
    return 'OK';
  }
  // Path
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return {
      mensaje: 'getOne',
    };
  }
  @Post()
  createOne(@Body() dto: CreatePostDto) {
    return dto;
  }

  @Put(':id')
  editOne(@Param('id') id: string, @Body() dto: EditPostDto) {
    return dto;
  }

  // @Delete(':id')
  // deleteOne(){}
}
