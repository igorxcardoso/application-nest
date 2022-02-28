import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello-world')
export class AppController {
  // readonly -> para não alterar a instancia doque está sendo recebido
  constructor(private readonly appService: AppService) {} // Injeção de dependências

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  test(): string {
    return 'test';
  }
}
