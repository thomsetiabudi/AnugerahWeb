import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GembalaEddyComponent } from './gembala-eddy.component';

describe('GembalaEddyComponent', () => {
  let component: GembalaEddyComponent;
  let fixture: ComponentFixture<GembalaEddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GembalaEddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GembalaEddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
