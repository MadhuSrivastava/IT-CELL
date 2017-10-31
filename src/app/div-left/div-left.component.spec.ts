import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivLeftComponent } from './div-left.component';

describe('DivLeftComponent', () => {
  let component: DivLeftComponent;
  let fixture: ComponentFixture<DivLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
