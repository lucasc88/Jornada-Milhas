import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  adultsCount = 1;
  childrenCount = 0;

  decreaseAdultsCount() {
    if (this.adultsCount > 1) {
      this.adultsCount--;
    }
  }
  increaseAdultsCount() {
    this.adultsCount++;
  }


  decreaseChildrenCount() {
    if (this.childrenCount > 0) {
      this.childrenCount--;
    }
  }
  increaseChildrenCount() {
    this.childrenCount++;
  }
}
