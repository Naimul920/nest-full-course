import { Inject, Injectable } from '@nestjs/common';
import { PROPERTY_REPOSITORY } from 'src/config/constants';
import { Property } from 'src/entities/property.entity';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Injectable()
export class PropertyService {
  constructor(
    @Inject(PROPERTY_REPOSITORY)
    private readonly propertyRepo: typeof Property,
  ) {}

  async findOne(id: number) {
    return await this.propertyRepo.findOne({ where: { id } });
  }
  async findAll() {}

  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepo.create({ ...createPropertyDto });
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const result = await this.propertyRepo.update(
      { ...updatePropertyDto },
      { where: { id }, returning: true },
    );

    console.log('result****************', result);
    return result[1][0];
  }
  async delete() {}
}
