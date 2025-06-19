import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pounce } from './pounce';

describe('Pounce', () => {
  let component: Pounce;
  let fixture: ComponentFixture<Pounce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pounce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pounce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
