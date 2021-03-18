import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseirasComponent } from './pulseiras.component';

describe('PulseirasComponent', () => {
  let component: PulseirasComponent;
  let fixture: ComponentFixture<PulseirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulseirasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
