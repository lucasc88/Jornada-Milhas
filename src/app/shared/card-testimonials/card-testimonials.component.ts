import { Testimonial } from './Testomonial';

import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from './testimonials.service';

@Component({
  selector: 'app-card-testimonials',
  templateUrl: './card-testimonials.component.html',
  styleUrls: ['./card-testimonials.component.scss']
})
export class CardTestimonialsComponent implements OnInit {

  testimonials: Testimonial[] = [];

  constructor(private testimonialsService: TestimonialsService) { }
  ngOnInit(): void {
    this.testimonialsService.listar().subscribe({
      next: data => this.testimonials = data,
      error: err => console.error(err)
    });
  }


  //   testimonials: string = `
  //   I highly recommend Jornada travel agency.
  // They offer a personalized and high-quality service
  // that exceeded my expectations on my last trip.
  // `;
  //   authorship: string = 'Mariana Faustino';

}
