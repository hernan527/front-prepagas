import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicasListGroupComponent } from './clinicas-list-group.component';

describe('ClinicasListGroupComponent', () => {
  let component: ClinicasListGroupComponent;
  let fixture: ComponentFixture<ClinicasListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ClinicasListGroupComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ClinicasListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
