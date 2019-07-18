import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngelProfilePage } from './angel-profile.page';

describe('AngelProfilePage', () => {
  let component: AngelProfilePage;
  let fixture: ComponentFixture<AngelProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngelProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngelProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
