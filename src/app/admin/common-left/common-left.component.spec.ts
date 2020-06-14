import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLeftComponent } from './common-left.component';

describe('CommonLeftComponent', () => {
  let component: CommonLeftComponent;
  let fixture: ComponentFixture<CommonLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
