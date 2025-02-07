import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MessageService } from 'primeng/api';

describe('EventService', () => {
  let service: EventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideHttpClient(withFetch()), MessageService]
    });
    service = TestBed.inject(EventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
