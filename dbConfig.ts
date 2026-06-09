import { Dialect } from 'sequelize';
import { Property } from 'src/entities/property.entity';

export interface IDatabaseConfigAttributes {
  dialect: Dialect;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  database?: string;
  synchronize?: boolean;
  autoLoadModels?: boolean;
  models?: any[];
}

export const pgConfig: IDatabaseConfigAttributes = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'property_db',
  synchronize: true,
  autoLoadModels: true,
  models: [Property],
//   entities: ['__dirname + /**/*.entity{.ts,.js}'],
};
