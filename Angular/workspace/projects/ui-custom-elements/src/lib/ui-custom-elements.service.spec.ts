import { TestBed } from '@angular/core/testing';

import { UiCustomElementsService } from './ui-custom-elements.service';

describe('UiCustomElementsService', () => {
  let service: UiCustomElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiCustomElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
