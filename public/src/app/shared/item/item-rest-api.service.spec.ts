import { TestBed } from '@angular/core/testing';

import { ItemRestApiService } from './item-rest-api.service';

describe('ItemRestApiService', () => {
  let service: ItemRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
