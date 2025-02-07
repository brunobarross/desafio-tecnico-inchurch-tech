import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000';
  events = signal<Evento[]>([]);

  getEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}/events`);
  }
  deleteEvent(id: number): Observable<Evento> {
    return this.http.delete<Evento>(`${this.apiUrl}/events/${id}`);
  }
}
