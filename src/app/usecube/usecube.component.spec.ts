import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecubeComponent } from './usecube.component';

describe('UsecubeComponent', () => {
  let component: UsecubeComponent;
  let fixture: ComponentFixture<UsecubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsecubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
