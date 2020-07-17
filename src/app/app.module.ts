import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ProductModule} from './products/products.module';
import { ProductService } from './product.service';
import { NgSelectModule } from '@ng-select/ng-select';

import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    NgSelectModule,
    ProductModule,
    AutoCompleteModule
     ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
