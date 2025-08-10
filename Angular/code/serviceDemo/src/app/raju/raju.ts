import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Common } from '../common';

@Component({
  selector: 'app-raju',
  imports: [FormsModule],
  templateUrl: './raju.html',
  styleUrl: './raju.css'
})
export class Raju {
      rajuMsg = '';
  raniMsgReceived = '';

  constructor(private service: Common) {}

  send() {
    this.service.setRajuMessage(this.rajuMsg);
  }

  receive() {
    this.raniMsgReceived = this.service.getRaniMessage();
  }
}