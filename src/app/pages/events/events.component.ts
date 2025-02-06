import { Component, Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventsHeaderComponent } from '../../components/events-header/events-header.component';
import { EventsGridComponent } from '../../components/events-grid/events-grid.component';
import { EventsTableComponent } from '../../components/events-table/events-table.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventsHeaderComponent, EventsGridComponent, EventsTableComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  constructor(private eventService: EventService) {}
  @Input() visualizationMode: string = 'grid';
  events: Evento[] = [];
  emptyMessage: string = "Não há eventos cadastrados";


  getEvents(): void {
    this.eventService.getEvents().subscribe((events) => (this.events = events));
  }

  onVisualizationModeChange(mode: string): void {
    this.visualizationMode = mode;
  }

  ngOnInit(): void {
    this.getEvents();
  }
}
