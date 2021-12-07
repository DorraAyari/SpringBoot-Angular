import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdditingTransfersItemsComponent } from './edditing-transfers-items.component';

describe('EdditingTransfersItemsComponent', () => {
  let component: EdditingTransfersItemsComponent;
  let fixture: ComponentFixture<EdditingTransfersItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdditingTransfersItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdditingTransfersItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
