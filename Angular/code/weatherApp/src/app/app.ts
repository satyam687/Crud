import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  city:string='';
  details:any={};
  constructor(public c:HttpClient){}
  getWeather(){
    this.c.get( `http://api.weatherapi.com/v1/current.json?key=be96115c8a3b4ab7b2655227252807&q=${this.city}`
    )
.subscribe((res:any) =>{
  this.details =res.current;
  this.city=''
})
    
  }
}
