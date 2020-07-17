import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';
import {Product} from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  constructor() { }
  productList:Product[]=[];
  
  setProductList(product){
    console.log(product);
    this.productList.push(product);
  }

}
