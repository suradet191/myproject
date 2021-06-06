import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotvComponent } from './dotv.component';

describe('DotvComponent', () => {
  let component: DotvComponent;
  let fixture: ComponentFixture<DotvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
