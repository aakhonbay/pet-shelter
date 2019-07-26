import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePetsNewComponent } from './create-pets-new.component';

describe('CreatePetsNewComponent', () => {
  let component: CreatePetsNewComponent;
  let fixture: ComponentFixture<CreatePetsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePetsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePetsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
