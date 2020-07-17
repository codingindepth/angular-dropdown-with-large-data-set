import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';
import {Product} from '../product';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  constructor() { }
  @ViewChild('productForm', { static: true }) public productForm: NgForm;
  @Output() product: EventEmitter<Product> = new EventEmitter<Product>();


  productField: Product = {} as Product;
  productLists:Product[]=[]


  SubmitForm() {
    console.log(this.productField);
    this.product.emit(this.productField);
  }

}
