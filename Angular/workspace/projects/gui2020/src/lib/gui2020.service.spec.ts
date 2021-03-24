import { TestBed } from '@angular/core/testing';

import { Gui2020Service } from './gui2020.service';

describe('Gui2020Service', () => {
  let service: Gui2020Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gui2020Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
