 // File: child.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() imageUrl: string = '';
  @Output() imageClicked = new EventEmitter<void>();

  showImage = false;

  onShowImage() {
    this.showImage = true;
    this.imageClicked.emit(); // Notify parent
  }

  resetImage() {
    this.showImage = false;
  }
}
