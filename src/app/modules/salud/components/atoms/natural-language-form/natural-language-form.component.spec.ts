import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalLanguageFormComponent } from './natural-language-form.component';

describe('NaturalLanguageFormComponent', () => {
  let component: NaturalLanguageFormComponent;
  let fixture: ComponentFixture<NaturalLanguageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalLanguageFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturalLanguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
