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
      oneWay: new FormControl(false),
      origin: new FormControl(null),
      destination: new FormControl(null)
    });
  }

  /**
   * Method to return a specific FormControl name to be sent to a child component
   * @param name
   * @returns 
   */
  getFormControlByName(name: string): FormControl {
    const control = this.searchForm.get(name);
    if (!control) {
      throw new Error(`FormControl with name "${name}" does not exist.`);
    }
    return control as FormControl;
  }
}
