import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1vs2Component } from './product1vs2.component';

describe('Product1vs2Component', () => {
  let component: Product1vs2Component;
  let fixture: ComponentFixture<Product1vs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product1vs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product1vs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
