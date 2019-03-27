import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http
      .get(API_URL + '/products')
      .map(response => {
        const todos = response.json();
        return todos.map((product) => new Product(product));
      })
      .catch(this.handleError);
  }

  public createProduct(product: Product): Observable<Product> {
    console.log("Added r");
    console.log(product);
    return this.http
      .post(API_URL + '/products', product)
      .map(response => {
        return new Product(response.json());
      })
      .catch(this.handleError);
  }

  public getProductById(productId: number): Observable<Product> {
    return this.http
      .get(API_URL + '/products/' + productId)
      .map(response => {
        return new Product(response.json());
      })
      .catch(this.handleError);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http
      .put(API_URL + '/products/' + product.id, product)
      .map(response => {
        return new Product(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
