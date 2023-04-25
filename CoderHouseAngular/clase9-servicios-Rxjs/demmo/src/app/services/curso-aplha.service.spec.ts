import { TestBed } from '@angular/core/testing';

import { CursoAplhaService } from './curso-aplha.service';

describe('CursoAplhaService', () => {
  let service: CursoAplhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoAplhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
