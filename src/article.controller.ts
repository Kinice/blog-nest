import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  constructor() {}

  @Get('list')
  getHello(): string {
    return 'article';
  }
}
