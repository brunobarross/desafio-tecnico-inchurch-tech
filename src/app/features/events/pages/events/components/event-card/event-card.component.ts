import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmationService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeComponent } from '../../../../../../shared/components/badge/badge.component';
import formatDate from '../../../../../../shared/utils/date.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [BadgeComponent, ButtonModule, CardModule, TooltipModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  providers: [ConfirmationService],
})
export class EventCardComponent {
  constructor(private router: Router) {}
  @Input() event?: Evento;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();
  formattedDate = computed(() => formatDate(this.event?.publishedAt));

  handleClickDelete(eventId: number) {
    this.deleteEvent.emit(eventId);
  }
  handleClickEdit(eventId: number) {
    this.editEvent.emit(eventId);
  }

  navigateToEvent(eventId: number) {
    this.router.navigate(['events', eventId]);
  }
}
