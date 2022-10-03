import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilidadeTransComponent } from './visibilidade-trans.component';

describe('VisibilidadeTransComponent', () => {
  let component: VisibilidadeTransComponent;
  let fixture: ComponentFixture<VisibilidadeTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibilidadeTransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibilidadeTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
