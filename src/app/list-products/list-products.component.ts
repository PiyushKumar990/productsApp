import { Component, OnInit } from '@angular/core';
import {ProductsDataService} from 'app/products-data-service';
import {Product} from 'app/product';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products : Product[];
  constructor(private productsDataService : ProductsDataService) { }

 
  ngOnInit() {
    this.productsDataService
      .getAllProducts()
      .subscribe(
        (products) => {
          console.log("Products fetched");
          console.log(products);
          this.products = products;
          console.log(this.products);
        }
      );
  }

}
