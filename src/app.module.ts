import { Module } from '@nestjs/common';

// database
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

// auth
import { AuthModule } from './auth/auth.module';

// redis
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { redisConfig } from './config/redis.config';

// pknote modules
import { ContentModule } from './system/content/content.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RedisModule.forRoot(redisConfig),
    AuthModule,
    ContentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
