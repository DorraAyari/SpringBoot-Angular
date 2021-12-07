import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenusComponent } from './revenus.component';

describe('RevenusComponent', () => {
  let component: RevenusComponent;
  let fixture: ComponentFixture<RevenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
