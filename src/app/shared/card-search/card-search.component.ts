import { Component, Input, OnInit } from '@angular/core';
import { Promocao } from 'src/app/core/types/Promocao';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {

  @Input() promotion!: Promocao;

  constructor() { }

  ngOnInit(): void {

  }
}
