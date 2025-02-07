import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeComponent } from '../../../../../../shared/components/badge/badge.component';
import formatDate from '../../../../../../shared/utils/date.util';


@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [
    BadgeComponent,
    ButtonModule,
    CardModule,
    TooltipModule
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  providers: [ConfirmationService],
})
export class EventCardComponent {
  @Input() event?: Evento;
  @Output() deleteEvent = new EventEmitter<number>();
  formattedDate = computed(() => formatDate(this.event?.publishedAt));

  handleClickDelete(event: Event) {
    this.deleteEvent.emit(this.event?.id);

  }
}
