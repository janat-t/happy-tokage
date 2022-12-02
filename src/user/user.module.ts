import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AppModule } from '../app.module';

@Module({
  imports: [AppModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
