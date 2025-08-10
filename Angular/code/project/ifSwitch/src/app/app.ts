 import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { NgFor, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgSwitchCase, NgSwitch, NgSwitchDefault,NgFor,NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 // num: number = 0;
  // isEven: boolean = true;
  // evenOdd() {
  //   this.isEven = (this.num % 2 == 0) ? true : false;
  // }
 name = '';
  // isimage = false;
  // imageUrl = '';
  // alternateUrl = '';

  // add() {
  //   const lower = this.name.toLowerCase().trim();
  //   if (lower === 'doramon' || lower === 'doraemon') {
  //     this.isimage = true;
  //     this.imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgd42TOgOHS5h89YC8DblEUKFBTHr139oUcA&s ';
  //   } else {
  //     this.isimage = false;
  //     this.alternateUrl = 'https://gear5world.com/cdn/shop/articles/nico_robin_wano_kuni_one-piece_5b4c3dd0-493f-4983-84d0-1420a4a5af93.jpg?v=1739192966';
  //   }
  // }
  num: number = 0;
  role: string = 'parent';
  arr: string[] = ['raju', 'john', 'shekhar'];
  isEven: boolean = true;
  evenOdd() {
    this.isEven = this.num % 2 == 0 ? true : false;
  }
}
