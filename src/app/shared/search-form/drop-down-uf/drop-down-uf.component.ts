import { Observable } from 'rxjs/internal/Observable';
import { name } from './../../../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { FederativeUnityService } from './federative-unity.service';
import { UnidadeFederativa } from './UnidadeFederativa';
import { map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

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
  @Input() control!: FormControl;

  federativeUnities: UnidadeFederativa[] = [];
  filteredOptions$?: Observable<UnidadeFederativa[]>;

  constructor(
    private federativeUnityService: FederativeUnityService) {
  }

  ngOnInit(): void {
    this.federativeUnityService.listar()
      .subscribe(data => {
        this.federativeUnities = data;
        console.log(this.federativeUnities);
      })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filteredValue = value?.toLowerCase();
    const result = this.federativeUnities.filter(
      state => state.nome.toLowerCase().includes(filteredValue)
    )
    return result
  }
}
