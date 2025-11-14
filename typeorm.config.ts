import { Product } from './src/products/products.entity';
import { Customers } from './src/customers/customers.entity';
import { DataSource } from 'typeorm';
import { Employee } from './src/employee/entities/employee.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'curso',
  entities: [Product, Customers, Employee],
  migrations: ['dist/migrations/*.js'],
});
