import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordBarchartComponent } from './dashbord-barchart.component';

describe('DashbordBarchartComponent', () => {
  let component: DashbordBarchartComponent;
  let fixture: ComponentFixture<DashbordBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordBarchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
