import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepencesComponent } from './depences.component';

describe('DepencesComponent', () => {
  let component: DepencesComponent;
  let fixture: ComponentFixture<DepencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
