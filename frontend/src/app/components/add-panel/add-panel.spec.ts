import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPanel } from './add-panel';

describe('AddPanel', () => {
  let component: AddPanel;
  let fixture: ComponentFixture<AddPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
