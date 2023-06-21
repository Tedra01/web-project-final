import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getAll() {
    return { message: 'List of products' };
  }

  create(name: string) {
    return { message: 'Product created' };
  }

  delete(id: number) {
    return { message: 'Product deleted' };
  }
}