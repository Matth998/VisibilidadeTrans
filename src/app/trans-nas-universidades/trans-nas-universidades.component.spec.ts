import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransNasUniversidadesComponent } from './trans-nas-universidades.component';

describe('TransNasUniversidadesComponent', () => {
  let component: TransNasUniversidadesComponent;
  let fixture: ComponentFixture<TransNasUniversidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransNasUniversidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransNasUniversidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
