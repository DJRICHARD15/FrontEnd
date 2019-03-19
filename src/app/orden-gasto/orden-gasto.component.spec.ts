import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenGastoComponent } from './orden-gasto.component';

describe('OrdenGastoComponent', () => {
  let component: OrdenGastoComponent;
  let fixture: ComponentFixture<OrdenGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
