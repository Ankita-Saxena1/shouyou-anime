import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stalk } from './stalk';

describe('Stalk', () => {
  let component: Stalk;
  let fixture: ComponentFixture<Stalk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stalk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stalk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
