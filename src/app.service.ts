import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Deployed NestJs app to Vercel using Github Actions!!!';
  }
}
