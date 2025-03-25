import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHealthComponent } from './banner-health.component';

describe('BannerHealthComponent', () => {
  let component: BannerHealthComponent;
  let fixture: ComponentFixture<BannerHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerHealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
