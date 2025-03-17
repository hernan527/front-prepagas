import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasDetallesComponent } from './mas-detalles.component';

describe('MasDetallesComponent', () => {
  let component: MasDetallesComponent;
  let fixture: ComponentFixture<MasDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MasDetallesComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
