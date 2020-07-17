
import { Injectable } from '@angular/core';
import { Product } from './product';
import { of, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ProductService {
  public ngSelList: Product[] = [];
  static counter: number = 0;

  constructor() { }

  searchProducts(searchString: string): Observable<Product[]> {
    console.log('searchProducts')
    let newList=[];
    for (var _i = 0; _i < 30; _i++) {
      let newProduct: Product = {
        productName: "This Product #" + _i, prodid: _i
      }
      newList.push(newProduct);
    }

    if (!searchString && !searchString.trim())
      return of(newList);

    else {
      let wholeProd = [...newList];
      let filterdProducts = wholeProd.filter(x => x.productName.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
      console.log(filterdProducts);
      return of(filterdProducts);
    }
  }

  createProducts(IsConcat: boolean): Observable<Product[]> {
    var counter = ProductService.counter;
    console.log(`create Prod ${IsConcat} Counter is ${ counter }`);
    //  public ngSelList = ['Some Product 1','Some Product 1'];
    var newList = [];
    if (IsConcat)
      var newlength = IsConcat ? counter + 20 : 20;
    for (var _i = counter; _i < newlength; _i++) {
      let newProduct: Product = {
        productName: "This Product #" + _i, prodid: _i
      }
      newList.push(newProduct);
    }
    ProductService.counter = this.ngSelList.length;

    if (IsConcat) {
      this.ngSelList = this.ngSelList.concat(newList);
    }
    else
      this.ngSelList = newList;

    ProductService.counter = this.ngSelList.length;
    console.log(`Product list is ${this.ngSelList.length}  and static counter is ${ProductService.counter}`);
    
    return of(this.ngSelList);


  }


}