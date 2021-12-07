import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingTransfersItemsComponent } from './adding-transfers-items.component';

describe('AddingTransfersItemsComponent', () => {
  let component: AddingTransfersItemsComponent;
  let fixture: ComponentFixture<AddingTransfersItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingTransfersItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingTransfersItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
