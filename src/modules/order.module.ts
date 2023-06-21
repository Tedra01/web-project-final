import { Module } from '@nestjs/common';
import { OrderController } from '../controller/orders.controller';
import { OrderService } from '../service/order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrdersModule {}
