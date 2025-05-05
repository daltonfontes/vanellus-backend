import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Teacher')
@Controller('teacher')
export class TeacherController {
  constructor() { }

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
