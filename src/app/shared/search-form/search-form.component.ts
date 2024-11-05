import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { SearchFormService } from 'src/app/core/services/search-form.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  constructor(public dialog: MatDialog,
    public searchFormService: SearchFormService) { }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
}
