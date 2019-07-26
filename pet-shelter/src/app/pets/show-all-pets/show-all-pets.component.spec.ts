import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPetsComponent } from './show-all-pets.component';

describe('ShowAllPetsComponent', () => {
  let component: ShowAllPetsComponent;
  let fixture: ComponentFixture<ShowAllPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
