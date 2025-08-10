import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Common {
   
private msgFromRaju = '';
  private msgFromRani = '';

  // Raju sends to Rani
  setRajuMessage(msg: string) {
    this.msgFromRaju = msg;
  }

  getRajuMessage(): string {
    return this.msgFromRaju;
  }

  // Rani sends to Raju
  setRaniMessage(msg: string) {
    this.msgFromRani = msg;
  }

  getRaniMessage(): string {
    return this.msgFromRani;
  }
}
