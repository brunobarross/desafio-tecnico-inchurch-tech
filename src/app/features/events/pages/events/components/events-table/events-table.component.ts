import {
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { Tooltip } from 'primeng/tooltip';
import truncateText from '../../../../../../shared/utils/string,util';
import formatDate from '../../../../../../shared/utils/date.util';
import { Evento } from '../../../../events.model';

@Component({
  selector: 'app-events-table',
  imports: [TableModule, ButtonModule, BadgeModule, Tooltip],
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.scss',
})
export class EventsTableComponent {
  @Input() events: WritableSignal<Evento[]> = signal<Evento[]>([]);
  @Input() emptyMessage?: string;
  @Output() deleteEvent = new EventEmitter<number>();

  truncateText(text: string, limit: number): string {
    return truncateText(text, limit);
  }
  formatDate(event: Evento): string {
    return formatDate(event.publishedAt);
  }

  handleClickDelete(eventId: number) {
    this.deleteEvent.emit(eventId);
  }
}
