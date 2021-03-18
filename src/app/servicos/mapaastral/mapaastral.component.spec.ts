import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaastralComponent } from './mapaastral.component';

describe('MapaastralComponent', () => {
  let component: MapaastralComponent;
  let fixture: ComponentFixture<MapaastralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaastralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaastralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
