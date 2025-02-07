import { Component, computed, signal } from '@angular/core';
import { EventsService } from '../../events.service';
import { Router, ActivatedRoute } from '@angular/router';
import formatDate from '../../../../shared/utils/date.util';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-event-single',
  imports: [BadgeModule],
  templateUrl: './event-single.component.html',
  styleUrl: './event-single.component.scss',
})
export class EventSingleComponent {
  constructor(
    private eventsService: EventsService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  event = signal<Evento | null>(null);
  formattedDate = computed(() => formatDate(this.event()?.publishedAt));
  ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    this.eventsService.getEvent(id).subscribe({
      next: (event) => {
        this.event.set(event);
      },
    });
  }
}
