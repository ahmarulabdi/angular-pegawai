import { TestBed } from '@angular/core/testing';

import { PegawaiService } from './pegawai.service';

describe('PegawaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PegawaiService = TestBed.get(PegawaiService);
    expect(service).toBeTruthy();
  });
});
