import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdditingDepencesItemsComponent } from './edditing-depences-items.component';

describe('EdditingDepencesItemsComponent', () => {
  let component: EdditingDepencesItemsComponent;
  let fixture: ComponentFixture<EdditingDepencesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdditingDepencesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdditingDepencesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
