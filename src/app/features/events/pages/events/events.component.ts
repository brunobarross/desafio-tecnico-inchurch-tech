import { Component, Input, signal, WritableSignal } from '@angular/core';
import { EventsHeaderComponent } from './components/events-header/events-header.component';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventsHeaderComponent, EventsGridComponent, EventsTableComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  constructor(private eventService: EventsService) {}
  @Input() visualizationMode: WritableSignal<string> = signal('grid');
  events = signal<Evento[]>([]);
  emptyMessage: string = 'Não há eventos cadastrados';

  getEvents(): void {
    this.eventService
      .getEvents()
      .subscribe((events) => this.events.set(events));
  }

  onVisualizationModeChange(mode: string): void {
    this.visualizationMode.set(mode);
  }

  ngOnInit(): void {
    this.getEvents();
  }
}
