import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let points:number = 0;
    return 'Hello World!';
    
  }
}
