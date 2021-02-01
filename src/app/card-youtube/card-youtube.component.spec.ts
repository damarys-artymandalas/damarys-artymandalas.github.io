import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardYoutubeComponent } from './card-youtube.component';

describe('CardYoutubeComponent', () => {
  let component: CardYoutubeComponent;
  let fixture: ComponentFixture<CardYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
