import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'app/products-data-service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  isNameEmpty = false;
  isDescEmpty = false;
  isAdded = false;
  product = {
    id: "",
    details : {
    nameP : {
      caption : "",
      type : "",
      mandatory : "",
      defaultValue : "",
      validationMessage : ""
    },
    description : {
      caption : "",
      type : "",
      mandatory : "",
      defaultValue : "",
      validationMessage : ""
    },
    height : {
      caption : "",
      type : "",
      mandatory : "",
      defaultValue : "",
      validationMessage : ""
    },
    width : {
      caption : "",
      type : "",
      mandatory : "",
      defaultValue : "",
      validationMessage : ""
    },
    isSmart : {
      caption : "",
      type : "",
      mandatory : "",
      defaultValue : "",
      validationMessage : ""
    },
  }
  }
  id = 0;
  nameP ;
  description;
  height;
  width;
  isSmart;
  constructor(private productsDataService: ProductsDataService
    ) { }

  ngOnInit() {
  }
 
  onAdd()
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
      this.product.id = ""+this.nameP+this.description+this.height+this.width+this.isSmart ;
      this.product.details.nameP.caption = "Name";
      this.product.details.nameP.type = "text";
      this.product.details.nameP.mandatory = "yes";
      this.product.details.nameP.defaultValue = this.nameP;
      this.product.details.nameP.validationMessage = "Name is mandatory";
      this.product.details.description.caption = "Description";
      this.product.details.description.type = "text";
      this.product.details.description.mandatory = "yes";
      this.product.details.description.defaultValue = this.description;
      this.product.details.description.validationMessage = "Description is mandatory";
      this.product.details.height.caption = "Height";
      this.product.details.height.type = "int";
      this.product.details.height.mandatory = "no";
      this.product.details.height.defaultValue = this.height;
      this.product.details.height.validationMessage = "";
      this.product.details.width.caption = "Width";
      this.product.details.width.type = "int";
      this.product.details.width.mandatory = "no";
      this.product.details.width.defaultValue = this.width;
      this.product.details.width.validationMessage = "";
      this.product.details.isSmart.caption = "isSmart";
      this.product.details.isSmart.type = "boolean";
      this.product.details.isSmart.mandatory = "no";
      this.product.details.isSmart.defaultValue = this.isSmart;
      this.product.details.isSmart.validationMessage = "";
      this.id++;
      console.log("Adding Successfully");
      console.log(this.product);
      this.productsDataService
      .addProducts(this.product)
      .subscribe(
        (newTodo) => {
          this.isAdded = true;
          console.log("Added Successfully")
        }
      );
    }
   
    
  }
}
