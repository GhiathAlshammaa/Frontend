import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gui2020Component } from './gui2020.component';

describe('Gui2020Component', () => {
  let component: Gui2020Component;
  let fixture: ComponentFixture<Gui2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gui2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gui2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
