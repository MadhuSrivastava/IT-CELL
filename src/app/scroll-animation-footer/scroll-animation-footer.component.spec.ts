import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollAnimationFooterComponent } from './scroll-animation-footer.component';

describe('ScrollAnimationFooterComponent', () => {
  let component: ScrollAnimationFooterComponent;
  let fixture: ComponentFixture<ScrollAnimationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollAnimationFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollAnimationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
