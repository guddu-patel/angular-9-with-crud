import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddUpdateComponent } from './course-add-update.component';

describe('CourseAddUpdateComponent', () => {
  let component: CourseAddUpdateComponent;
  let fixture: ComponentFixture<CourseAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
