import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenceItemComponent } from './depence-item.component';

describe('DepenceItemComponent', () => {
  let component: DepenceItemComponent;
  let fixture: ComponentFixture<DepenceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepenceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
