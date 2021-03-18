import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstelacaoComponent } from './constelacao.component';

describe('ConstelacaoComponent', () => {
  let component: ConstelacaoComponent;
  let fixture: ComponentFixture<ConstelacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstelacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstelacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
