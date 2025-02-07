import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  private apiUrl = 'http://localhost:3000';
  events = signal<Evento[]>([]);
  isLoading = signal<boolean>(false);

  getEvents() {
    this.isLoading.set(true);
    this.http.get<Evento[]>(`${this.apiUrl}/events`).subscribe({
      next: (events) => {
        this.events.set(events);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao carregar eventos',
        });
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      },
    });
  }

  deleteEvent(id: number) {
    this.isLoading.set(true);
    return this.http.delete<Evento>(`${this.apiUrl}/events/${id}`).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Evento deletado com sucesso',
        });
        this.getEvents();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao deletar evento',
        });
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      },
    });
  }
  editEvent(id: number) {
    console.log('Editando evento', id);
  }
}
