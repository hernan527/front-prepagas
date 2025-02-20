import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFooterSectionComponent } from './pre-footer-section.component';

describe('PreFooterSectionComponent', () => {
  let component: PreFooterSectionComponent;
  let fixture: ComponentFixture<PreFooterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PreFooterSectionComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PreFooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
