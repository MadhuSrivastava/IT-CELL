import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSliderComponent } from './about-slider.component';

describe('AboutSliderComponent', () => {
  let component: AboutSliderComponent;
  let fixture: ComponentFixture<AboutSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
