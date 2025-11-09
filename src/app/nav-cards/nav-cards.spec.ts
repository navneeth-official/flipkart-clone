import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCards } from './nav-cards';

describe('NavCards', () => {
  let component: NavCards;
  let fixture: ComponentFixture<NavCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
