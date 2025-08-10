import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
    @Input()imageUrl='';
    count:number =0;
    send(){
      this.count++;
    }
}
