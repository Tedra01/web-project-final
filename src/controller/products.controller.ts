import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Post()
  create(@Body() body: { name: string }) {
    return this.productService.create(body.name);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}