import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchTrainComponent } from './admin-search-train.component';

describe('AdminSearchTrainComponent', () => {
  let component: AdminSearchTrainComponent;
  let fixture: ComponentFixture<AdminSearchTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSearchTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
