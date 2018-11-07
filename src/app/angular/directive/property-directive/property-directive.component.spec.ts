import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDirectiveComponent } from './property-directive.component';

describe('PropertyDirectiveComponent', () => {
  let component: PropertyDirectiveComponent;
  let fixture: ComponentFixture<PropertyDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
