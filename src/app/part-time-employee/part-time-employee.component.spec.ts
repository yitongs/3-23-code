import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeEmployeeComponent } from './part-time-employee.component';

describe('PartTimeEmployeeComponent', () => {
  let component: PartTimeEmployeeComponent;
  let fixture: ComponentFixture<PartTimeEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartTimeEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartTimeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
