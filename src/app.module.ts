import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { VendaModule } from './venda/venda.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // padrão
      username: 'root',
      password: '',
      database: 'curso',
      autoLoadEntities: true,
      synchronize: false,  // importante! false em produção
      logging: true,
    }),
    ProductsModule, CustomersModule, EmployeeModule, VendaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
