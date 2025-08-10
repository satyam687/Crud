import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
      name: string = '';
  url: any = {};

  constructor(public c: HttpClient) {}

  getpoko() {
    if (!this.name) return;

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${this.name.toLowerCase()}`;

    this.c.get(apiUrl).subscribe(
      (res: any) => {
        this.url = {
          name: res.name,
          image: res.sprites?.front_default
        };
        this.name = '';
      },
      err => {
        console.error('Pokémon not found:', err);
        this.url = { name: 'Not found', image: '' };
      }
    );
  }
  }
  


