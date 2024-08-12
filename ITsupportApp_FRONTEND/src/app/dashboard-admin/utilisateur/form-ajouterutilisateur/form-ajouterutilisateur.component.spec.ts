import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterutilisateurComponent } from './form-ajouterutilisateur.component';

describe('FormAjouterutilisateurComponent', () => {
  let component: FormAjouterutilisateurComponent;
  let fixture: ComponentFixture<FormAjouterutilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjouterutilisateurComponent]
    });
    fixture = TestBed.createComponent(FormAjouterutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
