import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  getOrders(userId: number) {
    return { message: `User Orders ${userId}` };
  }
}