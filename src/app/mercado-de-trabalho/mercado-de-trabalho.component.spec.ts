import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoDeTrabalhoComponent } from './mercado-de-trabalho.component';

describe('MercadoDeTrabalhoComponent', () => {
  let component: MercadoDeTrabalhoComponent;
  let fixture: ComponentFixture<MercadoDeTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoDeTrabalhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoDeTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
