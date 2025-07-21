import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProModule } from './pro/pro.module';

@Module({
  imports: [UserModule, ProModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
