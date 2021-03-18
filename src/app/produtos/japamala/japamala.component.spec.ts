import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapamalaComponent } from './japamala.component';

describe('JapamalaComponent', () => {
  let component: JapamalaComponent;
  let fixture: ComponentFixture<JapamalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapamalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JapamalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
