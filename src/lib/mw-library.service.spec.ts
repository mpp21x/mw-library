import { TestBed } from '@angular/core/testing';

import { MwLibraryService } from './mw-library.service';

describe('MwLibraryService', () => {
  let service: MwLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MwLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
