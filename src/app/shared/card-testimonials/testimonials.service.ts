import { Testimonial } from './Testomonial';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  listar(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(`${this.apiUrl}depoimentos`);
  }
}
