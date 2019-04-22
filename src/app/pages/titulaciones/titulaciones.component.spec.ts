import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulacionesComponent } from './titulaciones.component';

describe('TitulacionesComponent', () => {
  let component: TitulacionesComponent;
  let fixture: ComponentFixture<TitulacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
