import {
  Component,
  computed,
  inject,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { EventsHeaderComponent } from './components/events-header/events-header.component';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import { EventsService } from '../../events.service';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    EventsHeaderComponent,
    EventsGridComponent,
    EventsTableComponent,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  providers: [ConfirmationService],
})
export class EventsComponent {
  constructor(private confirmationService: ConfirmationService) {}
  eventsService = inject(EventsService);
  @Input() visualizationMode: WritableSignal<string> = signal('grid');
  @Input() deleteEvent: WritableSignal<number> = signal<number>(0);
  events = this.eventsService.events;
  emptyMessage: string = 'Não há eventos cadastrados';

  getEvents(): void {
    this.eventsService.getEvents();
  }

  onVisualizationModeChange(mode: string): void {
    this.visualizationMode.set(mode);
  }

  viewDeleteEvent(eventId: number) {
    this.confirmationService.confirm({
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
        console.log(eventId)
        if (eventId) {
          this.eventsService.deleteEvent(eventId);
        }
      },
    });
  }

  ngOnInit(): void {
    this.getEvents();
  }
}
