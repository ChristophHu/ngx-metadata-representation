import { TestBed } from '@angular/core/testing';

import { NgxMetadateRepresentationService } from './ngx-metadate-representation.service';

describe('NgxMetadateRepresentationService', () => {
  let service: NgxMetadateRepresentationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMetadateRepresentationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
