import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/guards/api-key/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('isPublic', true)
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(ApiKeyGuard)
  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('tasks') // 👈 new endpoint
  tasks() {
    return this.appService.getTasks();
  }
}
