import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenceDetailComponent } from './depence-detail.component';

describe('DepenceDetailComponent', () => {
  let component: DepenceDetailComponent;
  let fixture: ComponentFixture<DepenceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepenceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
