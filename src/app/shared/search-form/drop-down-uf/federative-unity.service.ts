import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { UnidadeFederativa } from './UnidadeFederativa';

@Injectable({
  providedIn: 'root'
})
export class FederativeUnityService {

  private apiUrl: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(
    private http: HttpClient
  ) { 
  }

  listar() : Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}`);
  }
}
