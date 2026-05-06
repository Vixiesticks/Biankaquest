import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comic } from './comic';

describe('Comic', () => {
  let component: Comic;
  let fixture: ComponentFixture<Comic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comic],
    }).compileComponents();

    fixture = TestBed.createComponent(Comic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
