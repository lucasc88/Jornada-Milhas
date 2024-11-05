import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { FederativeUnityService } from './federative-unity.service';
import { UnidadeFederativa } from './UnidadeFederativa';

/**
 * Component that represents UF (Federative Units from Brasil)
 */
@Component({
  selector: 'app-drop-down-uf',
  templateUrl: './drop-down-uf.component.html',
  styleUrls: ['./drop-down-uf.component.scss']
})
export class DropDownUfComponent implements OnInit {

  @Input() label: string = '';
  @Input() prefixIcon: string = '';
  filteredOptions: UnidadeFederativa[] = [];

  constructor(
    private federativeUnityService: FederativeUnityService) {
  }

  ngOnInit(): void {
    this.federativeUnityService.listar()
      .subscribe(data => {
        this.filteredOptions = data;
        console.log("!!!!!!!!!!!!! data: " + JSON.stringify(data));
      });
  }

}
