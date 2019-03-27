import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'app/products-data-service';
import { Product } from 'app/product';
@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  products : Product[];
  selected ;
  nameP ;
  description;
  height;
  width;
  isSmart;
  selectedProduct : Product;
  isNameEmpty = false;
  isDescEmpty = false;
  isEdited = false;
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
  onSelect()
  {
    console.log(this.selected);
    this.productsDataService.getProductById(this.selected)
    .subscribe((product) => {
      console.log("this.products");
      console.log(product);
      this.selectedProduct = product;
      this.nameP = product.details.nameP.defaultValue;
      this.description = product.details.description.defaultValue;
      this.height = product.details.height.defaultValue;
      this.width = product.details.width.defaultValue;
      this.isSmart = product.details.isSmart.defaultValue;
    });
  }
 onEdit()
 {
  if(this.nameP == "" || this.nameP == null)
  {
    this.isNameEmpty  = true;
  }
  if(this.description == "" || this.description == null)
  {
    this.isDescEmpty  = true;
  }
  else{
    this.isNameEmpty  = false;
    this.isDescEmpty  = false;
  this.selectedProduct.details.nameP.defaultValue = this.nameP;
  this.selectedProduct.details.description.defaultValue = this.description;
  this.selectedProduct.details.height.defaultValue = this.height;
  this.selectedProduct.details.width.defaultValue = this.width;
  this.selectedProduct.details.isSmart.defaultValue = this.isSmart;
  this.productsDataService.updateProduct(this.selectedProduct)
  .subscribe(()=>{
    console.log("Updated");
    this.isEdited = true;
  })
 }
}
}
