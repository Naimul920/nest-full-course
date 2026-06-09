import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'properties',
  timestamps: true,
})
export class Property extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    allowNull: false,
    type: DataType.TEXT,
  })
  declare description: string;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(10, 2),
    defaultValue: 0.00,
    get(){
      const rawValue = this.getDataValue('price');
      const price = rawValue ? rawValue.toFixed(2) : null;
      return parseFloat(price);
    }
  })
  declare price: number;

  // @Column({
  //   allowNull: false,
  //   type: DataType.INTEGER,
  //   defaultValue: 0,
  // })
  // declare area: number;
}
