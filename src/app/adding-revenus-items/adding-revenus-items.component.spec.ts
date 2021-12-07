import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingRevenusItemsComponent } from './adding-revenus-items.component';

describe('AddingRevenusItemsComponent', () => {
  let component: AddingRevenusItemsComponent;
  let fixture: ComponentFixture<AddingRevenusItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingRevenusItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingRevenusItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
