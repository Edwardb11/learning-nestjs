import { Module } from '@nestjs/common';

import { CustomerController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';

import { ProductsModule } from '../products/products.module';
import { UsersService } from './service/users.service';
import { CustomersService } from './service/customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [ProductsModule, TypeOrmModule.forFeature([User, Customer])],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
