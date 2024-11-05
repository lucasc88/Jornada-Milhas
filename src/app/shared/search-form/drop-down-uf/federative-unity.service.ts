import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { UnidadeFederativa } from './UnidadeFederativa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FederativeUnityService {

  private apiUrl: string = environment.apiUrl + 'estados';
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(
    private http: HttpClient
  ) { }

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
