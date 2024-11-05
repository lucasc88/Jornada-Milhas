import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownUfComponent } from './drop-down-uf.component';

describe('DropDownUfComponent', () => {
  let component: DropDownUfComponent;
  let fixture: ComponentFixture<DropDownUfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownUfComponent]
    });
    fixture = TestBed.createComponent(DropDownUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
