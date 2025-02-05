import { Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
  {
    path: 'events',
    component: EventsComponent,
  },
];
