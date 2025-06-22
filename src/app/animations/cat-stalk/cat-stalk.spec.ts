import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatStalk } from './cat-stalk';

describe('CatStalk', () => {
  let component: CatStalk;
  let fixture: ComponentFixture<CatStalk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatStalk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatStalk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
