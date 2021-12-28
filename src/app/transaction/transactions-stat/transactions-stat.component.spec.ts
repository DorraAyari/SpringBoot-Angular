import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsStatComponent } from './transactions-stat.component';

describe('TransactionsStatComponent', () => {
  let component: TransactionsStatComponent;
  let fixture: ComponentFixture<TransactionsStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
