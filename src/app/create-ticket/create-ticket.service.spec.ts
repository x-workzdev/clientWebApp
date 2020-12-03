import { TestBed } from '@angular/core/testing';

import { CreateTicketService } from './create-ticket.service';

describe('CreateTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTicketService = TestBed.get(CreateTicketService);
    expect(service).toBeTruthy();
  });
});
