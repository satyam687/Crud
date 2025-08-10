import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
    V:any='';
    constructor(public as:ActivatedRoute){
      this.as.params.subscribe((res:any)=>this.V=res.id)
    }
}
