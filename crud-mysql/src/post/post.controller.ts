import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dtos';

@Controller('post')
export class PostController {
  // metodos para rutas
  @Get()
  getMany() {
    return 'OK';
  }
  // Path
  @Get(':id')
  getOne(@Param('id') id: string) {
    console.log(id);
    return {
      mensaje: 'getOne',
    };
  }
  @Post()
  createOne(@Body() dto: CreatePostDto) {
    return dto;
  }
}

// @Put(':id')
// editOne(@Param('id') id: string){}

// @Delete(':id')
// deleteOne(){}
