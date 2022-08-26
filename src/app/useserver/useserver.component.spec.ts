import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseserverComponent } from './useserver.component';

describe('UseserverComponent', () => {
  let component: UseserverComponent;
  let fixture: ComponentFixture<UseserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
