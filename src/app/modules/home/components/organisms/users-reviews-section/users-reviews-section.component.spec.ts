import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersReviewsSectionComponent } from './users-reviews-section.component';

describe('UsersReviewsComponent', () => {
  let component: UsersReviewsSectionComponent;
  let fixture: ComponentFixture<UsersReviewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UsersReviewsSectionComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(UsersReviewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
