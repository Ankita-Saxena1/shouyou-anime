import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicWidget } from './music-widget';

describe('MusicWidget', () => {
  let component: MusicWidget;
  let fixture: ComponentFixture<MusicWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
