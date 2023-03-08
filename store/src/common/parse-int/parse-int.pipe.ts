import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  /**
   * It takes a string, converts it to a number, and returns the number
   * @param {string} value - The value that is passed to the decorator.
   * @param {ArgumentMetadata} metadata - ArgumentMetadata
   * @returns The value is being returned.
   */
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);

    /* Checking if the value is a number. */
    if (isNaN(val)) {
      throw new BadRequestException(`${value} is not an number`);
    }
    return val;
  }
}
