import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsProductsComponent } from './views-products.component';

describe('ViewsProductsComponent', () => {
  let component: ViewsProductsComponent;
  let fixture: ComponentFixture<ViewsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
