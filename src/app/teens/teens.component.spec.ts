import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeensComponent } from './teens.component';

describe('TeensComponent', () => {
  let component: TeensComponent;
  let fixture: ComponentFixture<TeensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
