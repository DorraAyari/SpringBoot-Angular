import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdditingRevenusItemsComponent } from './edditing-revenus-items.component';

describe('EdditingRevenusItemsComponent', () => {
  let component: EdditingRevenusItemsComponent;
  let fixture: ComponentFixture<EdditingRevenusItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdditingRevenusItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdditingRevenusItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
