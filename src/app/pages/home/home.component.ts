import { PromotionService } from './../../core/services/promotion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.promotionService.promotionList().subscribe(promocoes => {
      console.log(promocoes);
    });
  }


}
