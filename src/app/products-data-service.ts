import { Injectable } from '@angular/core';
import { Product } from './product';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /products
  addProducts(product: Product): Observable<Product> {
    console.log("Added p");
    console.log(product);
    return this.api.createProduct(product);
  }

 
  // Simulate PUT /products/:id
  updateProduct(product: Product): Observable<Product> {
    return this.api.updateProduct(product);
  }

  // Simulate GET /products
  getAllProducts(): Observable<Product[]> {
    return this.api.getAllProducts();
   
  }

  // Simulate GET /products/:id
  getProductById(productId: number): Observable<Product> {
    return this.api.getProductById(productId);
  }

}
