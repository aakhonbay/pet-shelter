import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetsIdEditComponent } from './edit-pets-id-edit.component';

describe('EditPetsIdEditComponent', () => {
  let component: EditPetsIdEditComponent;
  let fixture: ComponentFixture<EditPetsIdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPetsIdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPetsIdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
