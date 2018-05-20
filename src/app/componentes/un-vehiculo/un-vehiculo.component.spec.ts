import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnVehiculoComponent } from './un-vehiculo.component';

describe('UnVehiculoComponent', () => {
  let component: UnVehiculoComponent;
  let fixture: ComponentFixture<UnVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
