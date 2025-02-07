import {
  Component,
  computed,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeComponent } from '../../../../../../shared/components/badge/badge.component';
import formatDate from '../../../../../../shared/utils/date.util';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [BadgeComponent, ButtonModule, CardModule, TooltipModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  @Input() event?: Evento;
  formattedDate = computed(()=>formatDate(this.event?.publishedAt));
}
