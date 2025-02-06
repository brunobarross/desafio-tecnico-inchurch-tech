import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { UtilsService } from '../../services/utils.service';
import { BadgeModule } from 'primeng/badge';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-events-table',
  imports: [TableModule, ButtonModule, BadgeModule, Tooltip],
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.scss',
})
export class EventsTableComponent {
  constructor(public utilsService: UtilsService) {}
  @Input() events: Evento[] = [];
  @Input() emptyMessage?: string

}
