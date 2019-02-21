import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customvideo1Component } from './customvideo1.component';

describe('Customvideo1Component', () => {
  let component: Customvideo1Component;
  let fixture: ComponentFixture<Customvideo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customvideo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customvideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
