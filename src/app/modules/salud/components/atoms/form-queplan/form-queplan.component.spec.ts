import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQueplanComponent } from './form-queplan.component';

describe('FormQueplanComponent', () => {
  let component: FormQueplanComponent;
  let fixture: ComponentFixture<FormQueplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [FormQueplanComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(FormQueplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
