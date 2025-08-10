import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { envFilePath } from './utils/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      load: [() => dotenv.config({ path: '.env' })],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        // DB_PORT: Joi.number().default(3000), // 默认数据库端口
        DB_PORT: Joi.number().valid(3306, 3307).default(3306), // 校验数据库端口 只能是 3306 或 3307
        DB_HOST: Joi.string().ip({ version: ['ipv4', 'ipv6'] }), // 默认数据库主机
        DB_URL: Joi.string().domain(),
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
