import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupProfilePage } from './startup-profile.page';

describe('StartupProfilePage', () => {
  let component: StartupProfilePage;
  let fixture: ComponentFixture<StartupProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
