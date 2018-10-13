import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GembalaPranawaComponent } from './gembala-pranawa.component';

describe('GembalaPranawaComponent', () => {
  let component: GembalaPranawaComponent;
  let fixture: ComponentFixture<GembalaPranawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GembalaPranawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GembalaPranawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
