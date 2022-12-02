import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service';

@Injectable()
export class UserService {
  constructor(private readonly appService: AppService) {}

  getHelloFromApp(): string {
    return this.appService.getHello() + 'from User';
  }
}
