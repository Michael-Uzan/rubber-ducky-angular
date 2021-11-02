import { TestBed } from '@angular/core/testing';

import { DuckResolverService } from './duck-resolver.service';

describe('DuckResolverResolver', () => {
  let resolver: DuckResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DuckResolverService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
