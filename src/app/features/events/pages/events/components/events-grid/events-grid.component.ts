import { NgClass } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';

@Component({
  selector: 'app-events-grid',
  imports: [EventCardComponent],
  templateUrl: './events-grid.component.html',
  styleUrl: './events-grid.component.scss',
})
export class EventsGridComponent {
  @Input() events = signal<Evento[]>([]);
  @Input() emptyMessage?: string;
}
