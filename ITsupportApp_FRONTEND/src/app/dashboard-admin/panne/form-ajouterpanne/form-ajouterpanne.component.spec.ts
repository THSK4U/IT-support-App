import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterpanneComponent } from './form-ajouterpanne.component';

describe('FormAjouterpanneComponent', () => {
  let component: FormAjouterpanneComponent;
  let fixture: ComponentFixture<FormAjouterpanneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjouterpanneComponent]
    });
    fixture = TestBed.createComponent(FormAjouterpanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
