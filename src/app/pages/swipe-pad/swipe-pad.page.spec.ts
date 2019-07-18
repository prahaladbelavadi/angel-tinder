import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipePadPage } from './swipe-pad.page';

describe('SwipePadPage', () => {
  let component: SwipePadPage;
  let fixture: ComponentFixture<SwipePadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipePadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipePadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
