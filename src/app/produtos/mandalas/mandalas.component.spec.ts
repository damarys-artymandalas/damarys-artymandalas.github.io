import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalasComponent } from './mandalas.component';

describe('MandalasComponent', () => {
  let component: MandalasComponent;
  let fixture: ComponentFixture<MandalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
