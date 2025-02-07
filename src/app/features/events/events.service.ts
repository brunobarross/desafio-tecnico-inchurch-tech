import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}
  private events_url = 'http://localhost:3000/events';

  getEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.events_url);
  }
}
