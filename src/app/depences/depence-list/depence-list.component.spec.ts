import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenceListComponent } from './depence-list.component';

describe('DepenceListComponent', () => {
  let component: DepenceListComponent;
  let fixture: ComponentFixture<DepenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepenceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
