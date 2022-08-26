import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterequetemdxComponent } from './createrequetemdx.component';

describe('CreaterequetemdxComponent', () => {
  let component: CreaterequetemdxComponent;
  let fixture: ComponentFixture<CreaterequetemdxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterequetemdxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterequetemdxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
