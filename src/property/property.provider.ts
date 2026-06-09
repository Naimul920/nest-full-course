import { PROPERTY_REPOSITORY } from "src/config/constants";
import { Property } from "src/entities/property.entity";

export const propertyProvider =[
  {
    provide: PROPERTY_REPOSITORY,
    useValue: Property,
  }
];