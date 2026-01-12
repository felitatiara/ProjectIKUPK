import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('dashboard')
  getHello() {
    return {
      message: 'Hello from NestJS 👋'
    };
  }
}
