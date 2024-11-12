import { Component } from '@angular/core';
import { SearchFormService } from 'src/app/core/services/search-form.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  constructor(
    public searchFormService: SearchFormService) { }

}
