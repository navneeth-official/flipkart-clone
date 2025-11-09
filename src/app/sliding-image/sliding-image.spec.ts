import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingImage } from './sliding-image';

describe('SlidingImage', () => {
  let component: SlidingImage;
  let fixture: ComponentFixture<SlidingImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
