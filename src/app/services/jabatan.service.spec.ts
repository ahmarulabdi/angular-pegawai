import { TestBed } from '@angular/core/testing';

import { JabatanService } from './jabatan.service';

describe('JabatanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JabatanService = TestBed.get(JabatanService);
    expect(service).toBeTruthy();
  });
});
