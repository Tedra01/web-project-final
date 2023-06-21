import { Controller, Get, UseGuards } from '@nestjs/common';
import { OrderService } from '../service/order.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getOrders(@CurrentUser() user: any) {
    return this.orderService.getOrders(user.userId);
  }
}
