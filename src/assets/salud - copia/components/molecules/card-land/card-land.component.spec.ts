import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLandComponent } from './card-land.component';

describe('CardLandComponent', () => {
  let component: CardLandComponent;
  let fixture: ComponentFixture<CardLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
