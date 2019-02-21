import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customertype123Component } from './customertype123.component';

describe('Customertype123Component', () => {
  let component: Customertype123Component;
  let fixture: ComponentFixture<Customertype123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customertype123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customertype123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
