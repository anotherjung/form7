import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Productvideo1learnmoreComponent } from './productvideo1learnmore.component';

describe('Productvideo1learnmoreComponent', () => {
  let component: Productvideo1learnmoreComponent;
  let fixture: ComponentFixture<Productvideo1learnmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Productvideo1learnmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Productvideo1learnmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
