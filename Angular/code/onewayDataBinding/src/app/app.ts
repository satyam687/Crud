import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
     name:string="Satyam Kushwaha"
     url:string="https://static.toiimg.com/photo/msid-91463487,width-96,height-65.cms "

    isDisable:boolean=false;
    fun(){
      alert("Hello i am ")
    }
}
