import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Services1photoslidesComponent } from './services1photoslides.component';

describe('Services1photoslidesComponent', () => {
  let component: Services1photoslidesComponent;
  let fixture: ComponentFixture<Services1photoslidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Services1photoslidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Services1photoslidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
