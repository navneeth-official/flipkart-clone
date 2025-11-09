import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerFurniture } from './designer-furniture';

describe('DesignerFurniture', () => {
  let component: DesignerFurniture;
  let fixture: ComponentFixture<DesignerFurniture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignerFurniture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerFurniture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
