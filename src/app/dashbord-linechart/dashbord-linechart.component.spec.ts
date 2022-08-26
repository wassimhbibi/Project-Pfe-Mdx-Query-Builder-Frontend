import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordLinechartComponent } from './dashbord-linechart.component';

describe('DashbordLinechartComponent', () => {
  let component: DashbordLinechartComponent;
  let fixture: ComponentFixture<DashbordLinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordLinechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
