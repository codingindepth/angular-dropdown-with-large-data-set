import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../products/product-list/product-list.component';
import {ProductFormComponent} from '../products/product-form/product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ProductFormComponent,
    ProductListComponent
  ],
  exports: [
    ProductFormComponent,
    ProductListComponent
  ]
})


export class ProductModule { }