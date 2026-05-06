import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChatter } from './add-chatter';

describe('AddChatter', () => {
  let component: AddChatter;
  let fixture: ComponentFixture<AddChatter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChatter],
    }).compileComponents();

    fixture = TestBed.createComponent(AddChatter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
