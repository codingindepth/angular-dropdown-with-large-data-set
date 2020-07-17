import { Component, VERSION } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public ngSelList: Product[] = [];
  counter: number = 0;
  text: string;
  results: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.createProducts(false).subscribe(resp => {
      this.ngSelList = resp;
      this.counter = this.ngSelList.length;
    });
  }

  scrollToEnd() {
    console.log('scrollToEnd');
    this.productService.createProducts(true).subscribe(resp => {
      this.ngSelList = resp;
      this.counter = this.ngSelList.length;
    });

  }

  openDropdown(event: any) {
    console.log('openDropdown');
    this.productService.createProducts(true).subscribe(resp => {
      this.ngSelList = resp;
      this.counter = this.ngSelList.length;
    });

  }

  searchProd(event: any){

  }

  search(event) {
    console.log(event.query);
        this.productService.searchProducts(event.query).subscribe(data => {
            this.results = data;
        });
    }


}
