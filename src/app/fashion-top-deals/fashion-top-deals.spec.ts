import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionTopDeals } from './fashion-top-deals';

describe('FashionTopDeals', () => {
  let component: FashionTopDeals;
  let fixture: ComponentFixture<FashionTopDeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionTopDeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionTopDeals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
