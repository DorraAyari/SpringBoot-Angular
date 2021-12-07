import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDepencesItemsComponent } from './adding-depences-items.component';

describe('AddingDepencesItemsComponent', () => {
  let component: AddingDepencesItemsComponent;
  let fixture: ComponentFixture<AddingDepencesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDepencesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingDepencesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
