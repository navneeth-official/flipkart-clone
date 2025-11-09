import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterEssentials } from './winter-essentials';

describe('WinterEssentials', () => {
  let component: WinterEssentials;
  let fixture: ComponentFixture<WinterEssentials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinterEssentials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterEssentials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
