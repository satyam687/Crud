 import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // Note: It's `styleUrls` (plural)
})
export class App {
//   //name: string = '';
//    dollers: number = 0;
//    value: number = 0;

//   convert() {
//     this.value = this.dollers*85;  // Example: Convert USD to INR at rate of 85
//  }
   a:number=0;
   b:number=0;
   c:number=0;
     add(){
  this.a + this.b; // didn't store result
  this.a = 0;
  this.b = 0;
}
}

