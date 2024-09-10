import { Component } from '@angular/core';

@Component({
  selector: 'app-card-testimonials',
  templateUrl: './card-testimonials.component.html',
  styleUrls: ['./card-testimonials.component.scss']
})
export class CardTestimonialsComponent {
  testimonials: string = `
  I highly recommend Jornada travel agency.
They offer a personalized and high-quality service
that exceeded my expectations on my last trip.
`;
  authorship: string = 'Mariana Faustino';
}
