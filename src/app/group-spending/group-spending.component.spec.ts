import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSpendingComponent } from './group-spending.component';

describe('GroupSpendingComponent', () => {
  let component: GroupSpendingComponent;
  let fixture: ComponentFixture<GroupSpendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupSpendingComponent]
    });
    fixture = TestBed.createComponent(GroupSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
