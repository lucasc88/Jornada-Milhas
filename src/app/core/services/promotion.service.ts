import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Promocao } from '../types/Promocao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private apiUrlPromocoes: string = environment.apiUrl + 'promocoes';

  constructor(
    private httpClient: HttpClient
  ) { }

  promotionList(): Observable<Promocao[]> {
    return this.httpClient.get<Promocao[]>(this.apiUrlPromocoes);
  }
}
