import { Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
];
