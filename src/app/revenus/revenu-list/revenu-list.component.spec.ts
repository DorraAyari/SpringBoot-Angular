import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuListComponent } from './revenu-list.component';

describe('RevenuListComponent', () => {
  let component: RevenuListComponent;
  let fixture: ComponentFixture<RevenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
