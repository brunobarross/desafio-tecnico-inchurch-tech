import { Component, Input } from '@angular/core';

import { BadgeComponent } from '../badge/badge.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UtilsService } from '../../services/utils.service';
@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [BadgeComponent, ButtonModule, CardModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  constructor(public utilsService: UtilsService) {}
  @Input() event?: Evento;
  formattedDate?: string;
  ngOnInit(): void {
    this.formattedDate = this.utilsService.formatDate(this.event?.publishedAt);
  }
}
