import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Steps123Component } from './steps123.component';

describe('Steps123Component', () => {
  let component: Steps123Component;
  let fixture: ComponentFixture<Steps123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Steps123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Steps123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
