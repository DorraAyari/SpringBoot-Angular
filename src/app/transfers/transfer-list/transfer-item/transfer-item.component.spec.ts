import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferItemComponent } from './transfer-item.component';

describe('TransferItemComponent', () => {
  let component: TransferItemComponent;
  let fixture: ComponentFixture<TransferItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
