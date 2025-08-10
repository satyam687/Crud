import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  movies: any[] = [];
  constructor(public s: HttpClient) {
    this.getData();
  }
  getData() {
    this.s
      .get(`http://localhost:3000/movies`)
      .subscribe((res: any) => (this.movies = res));
  }
  deleteMovie(id: any) {
    console.log(id)
    let x = confirm("do you really want to delete it?");
    if (x) {
      console.log(x,id)
      this.s.delete(`http://localhost:3000/movies/${id}`)
      .subscribe((res:any)=>this.getData())
    }
  } 
}
