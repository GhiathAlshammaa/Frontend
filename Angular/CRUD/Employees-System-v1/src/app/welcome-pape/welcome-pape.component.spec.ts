import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePapeComponent } from './welcome-pape.component';

describe('WelcomePapeComponent', () => {
  let component: WelcomePapeComponent;
  let fixture: ComponentFixture<WelcomePapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
