import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectsViewComponent } from './all-projects-view.component';

describe('AllProjectsViewComponent', () => {
  let component: AllProjectsViewComponent;
  let fixture: ComponentFixture<AllProjectsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProjectsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
