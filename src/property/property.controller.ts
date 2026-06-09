import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  createProperty(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create(createPropertyDto);
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.findOne(id);
  }

  // @Post()
  // create(
  //   @Body()
  //   createPropertyDto: CreatePropertyDto,
  // ) {
  //   return this.propertyService.create(createPropertyDto);
  // }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertyService.update(id, updatePropertyDto);
  }
}
