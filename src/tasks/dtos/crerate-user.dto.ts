import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

// https://github.com/typestack/class-validator
export class UserDto {
  @ApiProperty({ type: String })
  @IsString()
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  password: string;

  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsString()
  lastName: string;
}
