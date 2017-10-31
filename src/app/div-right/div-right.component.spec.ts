import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivRightComponent } from './div-right.component';

describe('DivRightComponent', () => {
  let component: DivRightComponent;
  let fixture: ComponentFixture<DivRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
