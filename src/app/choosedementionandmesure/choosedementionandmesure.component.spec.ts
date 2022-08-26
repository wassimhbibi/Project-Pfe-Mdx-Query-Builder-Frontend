import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedementionandmesureComponent } from './choosedementionandmesure.component';

describe('ChoosedementionandmesureComponent', () => {
  let component: ChoosedementionandmesureComponent;
  let fixture: ComponentFixture<ChoosedementionandmesureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosedementionandmesureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedementionandmesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
