import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  //this Input will have only 2 options: primary or secondary. By default, it will be primary
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
