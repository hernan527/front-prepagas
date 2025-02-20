import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbakSectionComponent } from './user-feedbak-section.component';

describe('UserFeedbakSectionComponent', () => {
  let component: UserFeedbakSectionComponent;
  let fixture: ComponentFixture<UserFeedbakSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [UserFeedbakSectionComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(UserFeedbakSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
