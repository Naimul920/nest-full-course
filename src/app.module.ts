import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { pgConfig } from 'dbConfig';

@Module({
  imports: [PropertyModule, SequelizeModule.forRoot(pgConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
