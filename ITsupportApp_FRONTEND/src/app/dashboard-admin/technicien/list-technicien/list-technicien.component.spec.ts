import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechnicienComponent } from './list-technicien.component';

describe('ListTechnicienComponent', () => {
  let component: ListTechnicienComponent;
  let fixture: ComponentFixture<ListTechnicienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTechnicienComponent]
    });
    fixture = TestBed.createComponent(ListTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should createpanne', () => {
    expect(component).toBeTruthy();
  });
});
