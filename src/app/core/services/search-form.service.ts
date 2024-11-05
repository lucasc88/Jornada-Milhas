import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {

  searchForm!: FormGroup;

  constructor() {
    this.initializeForm();
  }
  initializeForm() {
    this.searchForm = new FormGroup({
      oneWay: new FormControl(false)
    });
  }
}
