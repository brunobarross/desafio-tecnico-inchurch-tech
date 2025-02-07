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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { EventsService } from '../../../../events.service';
@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [
    BadgeComponent,
    ButtonModule,
    CardModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  providers: [ConfirmationService],
})
export class EventCardComponent {
  @Input() event?: Evento;
  formattedDate = computed(() => formatDate(this.event?.publishedAt));
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(
    private confirmationService: ConfirmationService,
    private eventsService: EventsService
  ) {}

  handleClickDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      header: 'Deletar evento',
      message: 'Deseja realmente excluir este evento?',
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Sim, confirmar',
        severity: 'danger',
      },
      accept: () => {
        if (this.event?.id) {
          this.eventsService.deleteEvent(this.event.id).subscribe(() => {
            this.deleteEvent.emit(this.event?.id);
          });
        }
      },
    });
  }
}
