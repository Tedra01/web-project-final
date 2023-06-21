import { Module } from '@nestjs/common';
import { ProductController } from '../controller/products.controller';
import { ProductService } from '../service/product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductsModule {}
