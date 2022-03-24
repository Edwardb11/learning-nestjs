import { Body, Controller, Post } from '@nestjs/common';
import { PhotosService } from './../services/photos.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Tasks Photos')
@Controller('api/photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}
  @Post()
  addPhoto(@Body() body: any) {
    return this.photosService.addPhoto(body);
  }
}
