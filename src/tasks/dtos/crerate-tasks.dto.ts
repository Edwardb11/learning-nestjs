import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

// https://github.com/typestack/class-validator
export class TasksDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  completed: boolean;
}
