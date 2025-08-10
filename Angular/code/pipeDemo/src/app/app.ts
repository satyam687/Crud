import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SatyamPipe } from './satyam-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe,LowerCasePipe,CurrencyPipe,FormsModule,JsonPipe,DecimalPipe,DatePipe,SlicePipe,SatyamPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 na:string = ""
 str: string ="JAVASCRIPT"
 cost: number=18.269563;
 price:number=199;
 obj={
  name:"john",age:45
 } 
 dt =new Date();
 user:string = "This is simple"
}
