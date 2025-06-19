import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Walk } from './walk';

describe('Walk', () => {
  let component: Walk;
  let fixture: ComponentFixture<Walk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Walk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Walk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
