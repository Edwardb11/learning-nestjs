import { Controller, Post, Body } from '@nestjs/common';
import { CategoriesService } from './../services/categories.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Tasks Categories')
@Controller('api/categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  addCategory(@Body() body: string) {
    return this.categoriesService.create(body);
  }
}
