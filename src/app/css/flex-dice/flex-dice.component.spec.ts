import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDiceComponent } from './flex-dice.component';

describe('FlexDiceComponent', () => {
  let component: FlexDiceComponent;
  let fixture: ComponentFixture<FlexDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
