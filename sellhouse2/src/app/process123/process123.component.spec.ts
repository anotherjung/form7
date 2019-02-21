import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Process123Component } from './process123.component';

describe('Process123Component', () => {
  let component: Process123Component;
  let fixture: ComponentFixture<Process123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Process123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Process123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
