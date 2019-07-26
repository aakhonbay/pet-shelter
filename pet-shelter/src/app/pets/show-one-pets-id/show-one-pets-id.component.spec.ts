import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnePetsIdComponent } from './show-one-pets-id.component';

describe('ShowOnePetsIdComponent', () => {
  let component: ShowOnePetsIdComponent;
  let fixture: ComponentFixture<ShowOnePetsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOnePetsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOnePetsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
