import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureDeals } from './furniture-deals';

describe('FurnitureDeals', () => {
  let component: FurnitureDeals;
  let fixture: ComponentFixture<FurnitureDeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnitureDeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureDeals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
