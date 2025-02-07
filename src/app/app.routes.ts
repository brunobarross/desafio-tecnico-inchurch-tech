import { Routes } from '@angular/router';
import { blockLoginGuardGuard } from './core/auth/guards/block-login-guard.guard';
import { LoginComponent } from './core/auth/pages/login.component';
import { LayoutBaseComponent } from './core/layout/layout-base.component';
import { EventsComponent } from './features/events/pages/events/events.component';
import { authGuard } from './core/auth/guards/auth.guard';
import { EventSingleComponent } from './features/events/pages/event-single/event-single.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [blockLoginGuardGuard],
  },
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full',
      },
      {
        path: 'events',
        title: 'Eventos',
        component: EventsComponent,
        canActivate: [authGuard],
      },
      {
        path: 'events/:id',
        title: 'Evento',
        component: EventSingleComponent,
        canActivate: [authGuard],
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
