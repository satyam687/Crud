 // File: app.component.ts
import { Component, ViewChild } from '@angular/core';
import { child } from './child/child';
mport { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [child],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl: string = '';
  counter: number = 0;

  @ViewChild(Child) c!: Child;

  incrementCounter() {
    this.counter++; // ✅ actually increment
  }

  hideImageFromParent() {
    this.c.resetImage(); // ViewChild method call
  }
}
