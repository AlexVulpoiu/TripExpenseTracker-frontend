import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSpendingComponent } from './individual-spending.component';

describe('IndividualSpendingComponent', () => {
  let component: IndividualSpendingComponent;
  let fixture: ComponentFixture<IndividualSpendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualSpendingComponent]
    });
    fixture = TestBed.createComponent(IndividualSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
