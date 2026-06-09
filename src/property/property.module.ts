import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { propertyProvider } from './property.provider';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService, ...propertyProvider],
})
export class PropertyModule {}
