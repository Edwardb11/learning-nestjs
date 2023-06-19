import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/guards/api-key/api-key.guard';
import { Public } from './auth/decorators/public.decorator';

@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @SetMetadata('isPublic', true)
  // Custom Decorator
  @Public()
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
