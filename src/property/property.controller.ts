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

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'find all properties';
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id,
    @Query('sort', ParseBoolPipe) sort,
    @Headers('Authorization') auth: string,
  ) {
    return auth;
  }

  @Post()
  create(
    @Body()
    createPropertyDto: CreatePropertyDto,
  ) {
    return createPropertyDto;
  }

  @Patch(':id')
  update(@Param('id') propertyId: string) {
    return `Update property with ID: ${propertyId}`;
  }
}
