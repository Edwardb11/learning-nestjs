import { Module } from '@nestjs/common';

import { CustomerController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';

import { ProductsModule } from '../products/products.module';
import { UsersService } from './service/users.service';
import { CustomersService } from './service/customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { OrdersService } from './service/orders.service';
import { OrdersController } from './controllers/orders.controller';
import { OrderItemController } from './controllers/order-item.controller';
import { OrderItemService } from './service/order-item.service';
import { ProductsService } from 'src/products/services/products.service';
@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([User, Customer, Order, OrderItem]),
  ],
  controllers: [
    CustomerController,
    UsersController,
    OrdersController,
    OrderItemController,
  ],
  providers: [CustomersService, UsersService, OrdersService, OrderItemService],
  exports: [UsersService],
})
export class UsersModule {}
