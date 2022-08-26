import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhasbordPiechartComponent } from './dhasbord-piechart.component';

describe('DhasbordPiechartComponent', () => {
  let component: DhasbordPiechartComponent;
  let fixture: ComponentFixture<DhasbordPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhasbordPiechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhasbordPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
