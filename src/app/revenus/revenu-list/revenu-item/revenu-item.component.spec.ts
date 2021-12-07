import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuItemComponent } from './revenu-item.component';

describe('RevenuItemComponent', () => {
  let component: RevenuItemComponent;
  let fixture: ComponentFixture<RevenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
