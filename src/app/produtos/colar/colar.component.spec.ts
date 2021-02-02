import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColarComponent } from './colar.component';

describe('ColarComponent', () => {
  let component: ColarComponent;
  let fixture: ComponentFixture<ColarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
