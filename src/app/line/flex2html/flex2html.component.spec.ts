import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flex2htmlComponent } from './flex2html.component';

describe('Flex2htmlComponent', () => {
  let component: Flex2htmlComponent;
  let fixture: ComponentFixture<Flex2htmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flex2htmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Flex2htmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
