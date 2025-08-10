import { Component } from '@angular/core';
import { Common } from '../common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rani',
  imports: [FormsModule],
  templateUrl: './rani.html',
  styleUrl: './rani.css'
})
export class Rani {
    raniMsg = '';
  rajuMsgReceived = '';

  constructor(private service: Common) {}

  send() {
    this.service.setRaniMessage(this.raniMsg);
  }

  receive() {
    this.rajuMsgReceived = this.service.getRajuMessage();
  }
}