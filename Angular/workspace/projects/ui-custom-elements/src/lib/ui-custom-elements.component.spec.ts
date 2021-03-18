import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCustomElementsComponent } from './ui-custom-elements.component';

describe('UiCustomElementsComponent', () => {
  let component: UiCustomElementsComponent;
  let fixture: ComponentFixture<UiCustomElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCustomElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCustomElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
