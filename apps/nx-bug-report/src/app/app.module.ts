import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppEntity } from './app.entity';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AppEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
