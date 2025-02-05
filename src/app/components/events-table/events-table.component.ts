import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-events-table',
  imports: [TableModule, ButtonModule],
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.scss',
})
export class EventsTableComponent {
  constructor(public utilsService: UtilsService) {}
  @Input() events: Evento[] = [];
}
